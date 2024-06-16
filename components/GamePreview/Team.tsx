import User from '@/firebase/models/user';
import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import TipoffText from '../TipoffText';

interface TeamProps {
  name: string;
  players: (User | undefined)[];
}

const Team: FC<TeamProps> = ({ name, players }) => {
  return (
    <View style={styles.team}>
      <View style={styles.profilePictures}>
        {players.map((player, index) => (
          <View style={index > 0 && { marginLeft: -10 }}>
            <ProfilePicture
              key={`${player?.id}${index}`}
              uri={player?.profilePictureUri}
            />
          </View>
        ))}
      </View>
      <TipoffText>{name}</TipoffText>
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  team: { alignItems: 'center', justifyContent: 'center', gap: 5 },
  profilePictures: {
    flexDirection: 'row',
    gap: -40,
  },
});
