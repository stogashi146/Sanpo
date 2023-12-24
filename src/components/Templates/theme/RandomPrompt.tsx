import React, { useState, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import Button from '../../Parts/Button'

const BUTTON_WIDTH = 200

const RandomPrompt: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [prompt, setPrompt] = useState('タップしてください')
  const animatedValue = useRef(new Animated.Value(0)).current // アニメーションの値を保持
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  })
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  })

  const frontAnimatedStyle = {
    transform: [
      { translateX: 0 }, // カードの幅の半分
      { translateY: 0 }, // カードの高さの半分
      { rotateY: frontInterpolate },
    ],
  }
  const backAnimatedStyle = {
    transform: [
      { translateX: 0 }, // カードの幅の半分
      { translateY: 100 }, // カードの高さの半分
      { rotateY: backInterpolate },
    ],
  }

  const prompts = [
    'お題1',
    'お題2',
    'お題3',
    // 他のお題...
  ]

  const getRandomPrompt = (): string => {
    const randomIndex = Math.floor(Math.random() * prompts.length)
    return prompts[randomIndex]
  }

  const handlePress = (): void => {
    console.log(isFlipped)
    if (!isFlipped) {
      setPrompt(getRandomPrompt())
      setIsFlipped(true)
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start() // アニメーションが完了したら状態を更新
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[frontAnimatedStyle]}>
        <Button color="primary" onPress={handlePress} style={styles.flipCard}>
          「どこで」のお題を表示する
        </Button>
      </Animated.View>
      <Animated.View style={[styles.flipCardBack, backAnimatedStyle]}>
        <Button color="primary" style={styles.flipCard}>
          {prompt}
        </Button>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCard: {
    width: '100%',
    backgroundColor: 'red',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    // backfaceVisibility: 'hidden',
  },
  flipCardBack: {},
  flipText: {},
})

export default RandomPrompt
