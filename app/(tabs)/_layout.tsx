import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import ProfilePicture from '@/components/ProfilePicture';
import { View } from 'react-native';
import { useUser } from '@/providers/UserProvider';
import Loading from '@/components/Loading';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const { user, isLoading } = useUser();
  const colorScheme = useColorScheme();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['dark'].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(top-tabs)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'basketball' : 'basketball-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused && {
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: 'white',
                }
              }
            >
              <ProfilePicture size={25} uri={user.profilePictureUri} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
