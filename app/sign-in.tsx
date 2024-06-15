import TextButton from '@/components/TextButton';
import TipoffText from '@/components/TipoffText';
import AvailableIcon from '@/constants/availableIcon';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/firebase/utils';
import { router } from 'expo-router';

GoogleSignin.configure({
  webClientId:
    '682910115888-1mf5a5sitp82pk80b6q4l0al73uan0eo.apps.googleusercontent.com',
});

const SignInScreen = () => {
  const handleSignInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const authCredential = GoogleAuthProvider.credential(userInfo.idToken);
      await signInWithCredential(auth, authCredential);
      router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TipoffText>tipoff</TipoffText>
      <TextButton
        onPress={handleSignInWithGoogle}
        leftIcon={AvailableIcon.GOOGLE}
        title="Sign in with Google"
      />
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
