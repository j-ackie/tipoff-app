import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getData } from '../utils';
import Game from '../models/game';

const getGames = async () => {
  const gamesSnapshot = await getData('games');

  if (!gamesSnapshot.exists()) return [];

  return gamesSnapshot.val();
};

const useGetGames = (): UseQueryResult<Game[]> =>
  useQuery({
    queryKey: ['games'],
    queryFn: getGames,
  });

export { useGetGames };
