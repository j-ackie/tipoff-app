import Label from '@/components/Label';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateMatchLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 10 }}>
      <Label>create a match</Label>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="match-format" options={{ title: 'Match Format' }} />
      </Stack>
    </SafeAreaView>
  );
};

export default CreateMatchLayout;
