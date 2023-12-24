import { Text } from 'react-native'
import { Tabs } from 'expo-router'
import { theme } from '../theme'
import { AntDesign, Octicons } from '@expo/vector-icons'

const Layout = (): JSX.Element => {
  return (
    <Tabs
      initialRouteName="theme/create"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.background.main,
        },
        headerTintColor: theme.palette.text.main,
        headerTitle: 'Sanpo',
        // headerBackTitle: 'Back',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="community/posts"
        options={{
          href: 'community/posts',
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={
                focused ? theme.palette.primary.main : theme.palette.gray.main
              }
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: theme.fontSize.sm,
                color: focused
                  ? theme.palette.primary.main
                  : theme.palette.gray.main,
              }}
            >
              みんなの投稿
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="theme/create"
        options={{
          title: 'お題',
          href: 'theme/create',
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="pluscircleo"
              size={24}
              color={
                focused ? theme.palette.primary.main : theme.palette.gray.main
              }
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: theme.fontSize.sm,
                color: focused
                  ? theme.palette.primary.main
                  : theme.palette.gray.main,
              }}
            >
              お題
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="myPage/list"
        options={{
          href: 'myPage/list',
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="person"
              size={24}
              color={
                focused ? theme.palette.primary.main : theme.palette.gray.main
              }
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: theme.fontSize.sm,
                color: focused
                  ? theme.palette.primary.main
                  : theme.palette.gray.main,
              }}
            >
              マイデータ
            </Text>
          ),
        }}
      />
      {/* Null Screens */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'index',
          href: null,
        }}
      />
      <Tabs.Screen
        name="auth/log_in"
        options={{
          title: 'auth/log_in',
          href: null,
        }}
      />
      <Tabs.Screen
        name="auth/sign_up"
        options={{
          title: 'auth/sign_up',
          href: null,
        }}
      />
    </Tabs>
  )
}

export default Layout
