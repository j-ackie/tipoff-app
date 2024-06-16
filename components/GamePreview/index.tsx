import Game from '@/firebase/models/game';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import TipoffText from '../TipoffText';
import Icon from '../Icon';
import AvailableIcon from '@/constants/availableIcon';
import { useGetUsersById } from '@/firebase/queries/user';
import Loading from '../Loading';
import Team from './Team';

interface GamePreviewProps {
  game: Game;
}

const GamePreview: FC<GamePreviewProps> = ({ game }) => {
  const team1Results = useGetUsersById(game.team1.playerIds);
  const team2Results = useGetUsersById(game.team2.playerIds);

  if (
    team1Results.some((result) => result.isLoading) ||
    team2Results.some((result) => result.isLoading)
  ) {
    return <Loading />;
  }

  if (
    team1Results.some((result) => result.isError) ||
    team2Results.some((result) => result.isError)
  ) {
    return <TipoffText>Failed to load users</TipoffText>;
  }

  const team1 = team1Results.map((result) => result.data);
  const team2 = team2Results.map((result) => result.data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.location}>
          <Icon name={AvailableIcon.LOCATION} size={20} />
          <TipoffText style={{ flexShrink: 1 }}>{game.location}</TipoffText>
        </View>
        <View style={styles.time}>
          <TipoffText>
            {!game.endTime ? 'live!' : game.startTime.getSeconds()}
          </TipoffText>
        </View>
      </View>
      <View style={styles.teams}>
        <Team name={game.team1.name} players={team1} />
        <Icon name={AvailableIcon.CLOSE} size={30} />
        <Team name={game.team2.name} players={team2} />
      </View>
    </View>
  );
};

export default GamePreview;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    width: '100%',
    backgroundColor: '#151313',
    gap: 10,
  },
  location: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: 5,
  },
  time: {
    flex: 1,
    alignItems: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  team: {
    flexDirection: 'row',
  },
  teams: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
