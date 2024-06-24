import { Id } from './scalars';

enum MatchFormat {
  ONE = '1s',
  TWO = '2s',
  THREE = '3s',
  FOUR = '4s',
  FIVE = '5s',
}

type Game = {
  id: Id;
  creatorId: Id;
  location: string;
  description: string | null;
  format: MatchFormat;
  team1: { playerIds: Id[]; name: string };
  team2?: { playerIds: Id[]; name: string };
  startTime: Date;
  endTime: Date | null;
};

export default Game;
export { MatchFormat };
