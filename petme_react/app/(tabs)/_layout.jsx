import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'PetMe',
          tabBarIcon: ({ color }) => <Ionicons name="paw-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
