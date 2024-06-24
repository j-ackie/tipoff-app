import { Image, StyleSheet, Platform, Pressable, View } from 'react-native';

import TipoffText from '@/components/TipoffText';
import GamePreview from '@/components/GamePreview';
import { useGetGames } from '@/firebase/queries/game';
import Loading from '@/components/Loading';
import TextButton from '@/components/TextButton';
import { router } from 'expo-router';

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

  if (data.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <TipoffText style={styles.noData}>it's kinda quiet in here</TipoffText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextButton title="create" onPress={() => router.push('create-match')} />
      {data.map((game) => (
        <GamePreview key={game.id} game={game} />
      ))}
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
