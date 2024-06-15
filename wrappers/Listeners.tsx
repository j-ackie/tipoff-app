import User from '@/firebase/models/user';
import { auth } from '@/firebase/utils';
import { useUser } from '@/providers/UserProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

const Listeners = () => {
  const { setUser } = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      if (!userInfo) {
        setUser(null);
        return;
      }

      const user: User = {
        id: userInfo.uid,
        name: userInfo.displayName,
      };

      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return null;
};

export default Listeners;
