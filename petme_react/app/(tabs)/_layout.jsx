import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import HomeScreen from './home';
import ExploreScreen from './explore';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
