import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FAFAFA',
        },
        headerTintColor: '#424242',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
      }}
    />
  )
}

export default Layout
