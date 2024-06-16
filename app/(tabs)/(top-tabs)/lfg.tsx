import ProfilePicture from '@/components/ProfilePicture';
import TipoffText from '@/components/TipoffText';
import { useUser } from '@/providers/UserProvider';
import { getAuth } from 'firebase/auth';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { user } = useUser();

  return null;
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
