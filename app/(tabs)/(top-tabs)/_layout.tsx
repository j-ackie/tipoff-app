import { StyleSheet, View } from 'react-native';
import { router, withLayoutContext } from 'expo-router';
import {
  MaterialTopTabBar,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TipoffText from '@/components/TipoffText';

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MaterialTopTabs
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused, color }) => (
            <TipoffText
              style={{ fontSize: 36, fontWeight: focused ? 'bold' : 'normal' }}
            >
              {route.name === 'index' ? 'games' : route.name}
            </TipoffText>
          ),
          tabBarIndicator: () => null,
        })}
      >
        <MaterialTopTabs.Screen name="index" />
        <MaterialTopTabs.Screen name="lfg" />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
