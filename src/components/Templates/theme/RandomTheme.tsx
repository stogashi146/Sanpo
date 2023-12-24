import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, type ViewStyle } from 'react-native'
import Button, { type ButtonColor } from '../../Parts/Button'
import { theme } from '../../../theme'

interface RandomThemeProps {
  themes: string[]
  buttonColor: ButtonColor['color']
  buttonTitle: string
  style?: ViewStyle
}
const SLOT_HEIGHT = 100

const RandomTheme: React.FC<RandomThemeProps> = (props) => {
  const { themes } = props

  const [scrollAnim] = useState(new Animated.Value(0))
  const symbols = themes
  const [result, setResult] = useState('')
  const [extendedSymbols, setExtendedSymbols] = useState(symbols)
  const [disabledButton, setDisabledButton] = useState(false)

  const spin = (): void => {
    if (disabledButton) {
      return
    } else {
      setDisabledButton(true)
    }

    const randomIndex = Math.floor(Math.random() * symbols.length)
    const extendedSymbols = [...symbols, ...symbols, ...symbols] // シンボルを3回繰り返す
    setExtendedSymbols(extendedSymbols)
    const startPosition = SLOT_HEIGHT * extendedSymbols.length // スクロールの開始位置（負の値）
    const endPosition = SLOT_HEIGHT * (symbols.length + randomIndex) // スクロールの終了位置

    scrollAnim.setValue(-startPosition)
    setResult('')

    // アニメーションの実行
    Animated.timing(scrollAnim, {
      toValue: -endPosition,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setResult(symbols[randomIndex])
      console.log(symbols[randomIndex])
    })
  }

  return (
    <View style={(styles.container, props.style)}>
      <View style={styles.slotWindow}>
        <Animated.View style={{ transform: [{ translateY: scrollAnim }] }}>
          {extendedSymbols.map((symbol, index) => (
            <Text key={index} style={styles.symbol}>
              {symbol}
            </Text>
          ))}
        </Animated.View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          color={disabledButton ? 'disable' : props.buttonColor}
          onPress={spin}
          containerStyle={{ width: '80%' }}
        >
          {props.buttonTitle}
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slotWindow: {
    height: 50, // 表示ウィンドウの高さ
    overflow: 'hidden',
    // backgroundColor: 'red',
  },
  symbol: {
    fontSize: theme.fontSize.xl,
    height: SLOT_HEIGHT, // 各要素の高さ
    textAlign: 'center',
    paddingTop: 10,
  },
  buttonWrapper: {
    marginTop: 8,
    alignItems: 'center',
  },
})

export default RandomTheme
