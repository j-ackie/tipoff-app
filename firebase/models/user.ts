import { createEntity } from './utils';

type User = {
  id: string;
  name: string | null;
  username: string | null;
  profilePictureUri: string | null;
  bio: string | null;
};

const createUser = createEntity<User>;

export default User;
export { createUser };
