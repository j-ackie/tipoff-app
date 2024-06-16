type Game = {
  id: string;
  location: string;
  team1: { playerIds: string[]; name: string };
  team2: { playerIds: string[]; name: string };
  startTime: Date;
  endTime: Date | null;
};

export default Game;
