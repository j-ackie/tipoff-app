import Game from '@/firebase/models/game';
import User from '@/firebase/models/user';
import { FC, useState } from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import TeamDetails from './TeamDetails';

interface GameDetailsProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  game: Game;
  team1?: (User | undefined)[];
  team2?: (User | undefined)[];
}

const width = Dimensions.get('window').width * 0.8;

const GameDetails: FC<GameDetailsProps> = ({
  visible,
  setVisible,
  game,
  team1,
  team2,
}) => {
  const [page, setPage] = useState(0);

  return (
    <Modal visible={visible} transparent>
      <Pressable
        onPress={() => setVisible(false)}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <View style={styles.container}>
        <View style={styles.popupContainer}>
          <FlatList
            data={[team1, team2]}
            renderItem={({ item, index }) => (
              <TeamDetails game={game} team={item} />
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            onViewableItemsChanged={({ viewableItems }) => {
              console.log('a');
              if (viewableItems.length === 0) return;

              setPage(viewableItems[0].index || 0);

              return;
            }}
            getItemLayout={(data, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
            viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
          />
          <View>
            <View style={styles.circle} />
            <View style={styles.circle} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GameDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: width,
    height: '50%',
    backgroundColor: '#151313',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  teamName: {
    fontSize: 24,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: 'green',
    backgroundColor: 'green',
    overflow: 'hidden',
  },
});
