import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { theme } from '../../theme'

const Card = (): JSX.Element => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/700' }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>適切なタイトル</Text>
        <Text style={styles.description}>
          ここにはタイトルが入ります。テキストの表示は、2行までです。ここにはタイトルが入ります…
        </Text>
      </View>
      <View style={styles.footer}>
        <MaterialIcons
          name="favorite-border"
          size={26}
          color="black"
          style={styles.favoriteIcon}
        />
        <Feather name="share" size={24} color="black" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    // marginTop: 50,
    // backgroundColor: 'green',
    borderRadius: 2,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    // elevation: 3,
    marginVertical: 2,
    borderBottomColor: theme.palette.text.main,
  },
  image: {
    width: '100%',
    height: 400,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  footer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  favoriteIcon: {
    marginRight: 25,
  },
})

export default Card
