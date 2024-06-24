import TextButton from '@/components/TextButton';
import TipoffText from '@/components/TipoffText';
import AvailableIcon from '@/constants/availableIcon';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/firebase/utils';
import { Redirect } from 'expo-router';
import Icon from '@/components/Icon';
import { useUser } from '@/providers/UserProvider';

GoogleSignin.configure({
  webClientId:
    '682910115888-1mf5a5sitp82pk80b6q4l0al73uan0eo.apps.googleusercontent.com',
});

const SignInScreen = () => {
  const { user } = useUser();

  if (user) {
    return <Redirect href="/" />;
  }

  const handleSignInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const authCredential = GoogleAuthProvider.credential(userInfo.idToken);
      await signInWithCredential(auth, authCredential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconAndTitle}>
        <Icon name={AvailableIcon.BASKETBALL} size={40} />
        <TipoffText style={styles.title}>tipoff</TipoffText>
      </View>
      <TextButton
        onPress={handleSignInWithGoogle}
        leftIcon={AvailableIcon.GOOGLE}
        title="sign in with google"
      />
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  iconAndTitle: {
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    gap: 20,
    flex: 1,
  },
  title: {
    fontSize: 36,
  },
  newAroundHere: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
