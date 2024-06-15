import ProfilePicture from '@/components/ProfilePicture';
import TipoffText from '@/components/TipoffText';
import { useUser } from '@/providers/UserProvider';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { user } = useUser();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <ProfilePicture size={150} uri={user?.profilePictureUri} />
        <View>
          <TipoffText style={styles.username}>{user?.username}</TipoffText>
          <TipoffText>21 years old</TipoffText>
          <TipoffText>Shooter</TipoffText>
          <TipoffText>10 games played</TipoffText>
          <TipoffText>3 commendments</TipoffText>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <TipoffText>
          hello my name is daryl, i love playing basketball, i love playing with
          my friends but also play recreation at my school
        </TipoffText>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    gap: 20,
  },
  container: {
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
    fontSize: 40,
  },
});
