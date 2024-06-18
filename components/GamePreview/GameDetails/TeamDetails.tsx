import TipoffText from '@/components/TipoffText';
import UserInfo from '@/components/UserInfo';
import Game from '@/firebase/models/game';
import User from '@/firebase/models/user';
import { FC } from 'react';
import { Dimensions, View } from 'react-native';

interface TeamDetailsProps {
  game: Game;
  team: (User | undefined)[];
}
const width = Dimensions.get('window').width * 0.8;
const TeamDetails: FC<TeamDetailsProps> = ({ game, team }) => {
  return (
    <View style={{ width }}>
      {team.map((player) =>
        player === undefined ? null : <UserInfo user={player} />
      )}
      <TipoffText>meet</TipoffText>
    </View>
  );
};

export default TeamDetails;
