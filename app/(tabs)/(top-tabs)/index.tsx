import { Image, StyleSheet, Platform, Pressable, View } from 'react-native';

import TipoffText from '@/components/TipoffText';
import GamePreview from '@/components/GamePreview';
import { useGetGames } from '@/firebase/queries/game';
import Loading from '@/components/Loading';

export default function HomeScreen() {
  const { data, isLoading, isError } = useGetGames();

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return (
      <View style={styles.noDataContainer}>
        <TipoffText>error</TipoffText>
      </View>
    );
  }

  // if (data.length === 0) {
  //   return (
  //     <View style={styles.noDataContainer}>
  //       <TipoffText style={styles.noData}>it's kinda quiet in here</TipoffText>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <GamePreview
        game={{
          id: '1',
          location: '1305, eastwood st, brooklyn, ny 12345',
          team1: {
            name: 'Dream Team',
            playerIds: [
              'xE1pWgiRwoQWDxQVscPUpAxplH53',
              'xE1pWgiRwoQWDxQVscPUpAxplH53',
            ],
          },
          team2: {
            name: 'Bob',
            playerIds: [
              'xE1pWgiRwoQWDxQVscPUpAxplH53',
              'xE1pWgiRwoQWDxQVscPUpAxplH53',
            ],
          },
          startTime: new Date(),
          endTime: null,
        }}
      />
      <GamePreview
        game={{
          id: '1',
          location: '1305, eastwood st, brooklyn, ny 12345',
          team1: {
            name: 'Dream Team',
            playerIds: ['xE1pWgiRwoQWDxQVscPUpAxplH53'],
          },
          team2: {
            name: 'Bob',
            playerIds: ['xE1pWgiRwoQWDxQVscPUpAxplH53'],
          },
          startTime: new Date(),
          endTime: new Date(),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noData: {
    fontSize: 20,
  },
});
