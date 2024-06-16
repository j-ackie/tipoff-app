import { Image, StyleSheet, Platform, Pressable, View } from 'react-native';

import TipoffText from '@/components/TipoffText';
import GamePreview from '@/components/GamePreview';

export default function HomeScreen() {
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
    gap: 20,
  },
});
