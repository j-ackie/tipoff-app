import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { getData, pushData } from '../utils';
import Game from '../models/game';
import { useState } from 'react';
import { firebaseObjectsToEntities } from '../models/utils';

const getGames = async (): Promise<Game[]> => {
  const gamesSnapshot = await getData('games');

  if (!gamesSnapshot.exists()) return [];

  return firebaseObjectsToEntities<Game>(gamesSnapshot.val());
};

const createGame = async (game: Omit<Game, 'id'>): Promise<Game> => {
  const ref = await pushData('games', game);

  if (!ref.key) throw new Error('Failed to create game');

  return {
    id: ref.key,
    ...game,
  };
};

const useGetGames = (): UseQueryResult<Game[]> =>
  useQuery({
    queryKey: ['games'],
    queryFn: getGames,
  });

const useCreateGame = (): UseMutationResult<
  Game,
  unknown,
  Omit<Game, 'id'>
> => {
  const [mutationKey, setMutationKey] = useState(['games']);

  return useMutation({
    mutationFn: createGame,
    mutationKey: mutationKey,
    onSuccess: (data) => {
      if (data.id) setMutationKey(['games', data.id]);
    },
  });
};

export { useGetGames, useCreateGame };
