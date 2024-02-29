import { Tabs } from 'expo-router'
import { Foundation, Ionicons } from '@expo/vector-icons'
import { theme } from '@/themes'
import { Avatar } from '@/components/Avatar'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[600],
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderColor: theme.colors.black,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Avatar
              selected={color === theme.colors.white}
              source={{ uri: 'https://github.com/daniel-koti.png' }}
            />
          ),
        }}
      />
    </Tabs>
  )
}
