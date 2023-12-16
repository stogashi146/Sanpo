import { View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
import Card from '../../components/Parts/Card'
import { ScrollView } from 'react-native-gesture-handler'

const handlePress = (): void => {
  router.push('/memo/create')
}

const Index = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'みんなの投稿',
      headerRight: () => {
        return <LogOutButton />
      },
    })
  }, [])
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* <MemoListItem /> */}
        <Card />
        <Card />
      </View>
      {/* 追加ボタン */}
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#ffffff" />
      </CircleButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})

export default Index
