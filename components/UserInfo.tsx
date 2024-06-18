import User from '@/firebase/models/user';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import ProfilePicture from './ProfilePicture';
import TipoffText from './TipoffText';

interface UserInfoProps {
  user: User;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <ProfilePicture size={100} uri={user?.profilePictureUri} />
        <View>
          <TipoffText style={styles.username}>{user?.username}</TipoffText>
          <TipoffText>21 years old</TipoffText>
          <TipoffText>Shooter</TipoffText>
          <TipoffText>10 games played</TipoffText>
          <TipoffText>3 karma</TipoffText>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <TipoffText>{user.bio}</TipoffText>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  bioContainer: {
    paddingHorizontal: 30,
  },
  username: {
    fontSize: 30,
  },
});
