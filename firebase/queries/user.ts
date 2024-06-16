import { UseQueryResult, useQueries, useQuery } from '@tanstack/react-query';
import User from '../models/user';
import { getData } from '../utils';
import { firebaseObjectToEntity } from '../models/utils';

const getUserById = async (id: string) => {
  const userSnapshot = await getData(`users/${id}`);

  if (!userSnapshot.exists()) return null;

  return firebaseObjectToEntity<User>(id, userSnapshot.val());
};

const useGetUsersById = (userIds: string[]): UseQueryResult<User>[] =>
  useQueries({
    queries: userIds.map((userId) => ({
      queryKey: ['users', userId],
      queryFn: () => getUserById(userId),
    })),
  });
export { useGetUsersById };
