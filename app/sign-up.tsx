import TextButton from '@/components/TextButton';
import TipoffText from '@/components/TipoffText';
import TipoffTextInput from '@/components/TipoffTextInput';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TipoffText style={styles.title}>sign up</TipoffText>
      <View style={styles.inputs}>
        <TipoffTextInput label="email" />
        <TipoffTextInput label="username" />
        <TipoffTextInput label="password" />
        <TipoffTextInput label="confirm password" />
      </View>
      <View style={styles.alreadyHaveAnAccount}>
        <TipoffText>already have an account?</TipoffText>
        <TextButton
          title="sign in"
          onPress={() => router.replace('/sign-in')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 40,
  },
  inputs: {
    gap: 20,
  },
  alreadyHaveAnAccount: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
