import User from '@/firebase/models/user';
import { auth, getData, setData } from '@/firebase/utils';
import { onAuthStateChanged } from 'firebase/auth';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextValue>({} as UserContextValue);

const useUser = () => {
  const value = useContext(UserContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useUser must be wrapped in a <UserProvider />');
    }
  }

  return value;
};

const UserProvider = (props: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userInfo) => {
      if (!userInfo) {
        setUser(null);
        return;
      }

      const userSnapshot = await getData(`users/${userInfo.uid}`);
      let user: User;

      if (!userSnapshot.exists()) {
        user = {
          id: userInfo.uid,
          name: userInfo.displayName,
          profilePictureUri: userInfo.photoURL,
          username: null,
        };

        await setData(`users/${userInfo.uid}`, {
          name: user.name,
          profilePictureUri: user.profilePictureUri,
        });
      } else {
        user = {
          id: userInfo.uid,
          name: userSnapshot.child('name').val(),
          profilePictureUri: userSnapshot.child('profilePictureUri').val(),
          username: userSnapshot.child('username').val(),
        };
      }

      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ isLoading, user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
