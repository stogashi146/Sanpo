import { Stack } from 'expo-router'
import { theme } from '../theme'

const Layout = (): JSX.Element => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.background.main,
        },
        headerTintColor: theme.palette.text.main,
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
