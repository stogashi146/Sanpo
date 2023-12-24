import React, { type ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../Parts/Button'
import { theme } from '../../../theme'
import RandomTheme from './RandomTheme'

// お題を表示するためのデータ型
// interface PromptButtonProps {
//   title: string
//   onPress: () => void
// }

interface ThemeWrapperProps {
  title: string
  buttonLabel?: string
  children: ReactNode
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({
  title,
  buttonLabel,
  children,
}) => {
  return (
    <View style={styles.themeWrapper}>
      <View style={styles.titleBorder}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.themeButtonWrapper}>
        {/* <Button color="primary">{buttonLabel}</Button> */}
        {children}
      </View>
    </View>
  )
}

const ThemeCreateTemplate: React.FC = () => {
  // お題を更新する関数
  // const updatePrompt = (): void => {
  //   console.log('a')
  // }

  return (
    <View style={styles.container}>
      <ThemeWrapper title="どこで">
        <RandomTheme
          buttonColor="primary"
          buttonTitle="どこでのお題を作成"
          themes={['1', '2', '3', '4', '5', '6', '7', '8']}
          style={{ marginTop: 12, marginBottom: 12 }}
        />
      </ThemeWrapper>
      <ThemeWrapper title="なにを">
        <RandomTheme
          buttonColor="secondary"
          buttonTitle="何をのお題を作成"
          themes={['1', '2', '3', '4', '5', '6', '7', '8']}
          style={{ marginTop: 12, marginBottom: 12 }}
        />
      </ThemeWrapper>
      {/* <ThemeWrapper title="何を" buttonLabel="「何を」のお題を表示する" /> */}
      <View style={[styles.themeWrapper, styles.disableButtonWrapper]}>
        <View style={styles.resetButtonWrapper}>
          <Button color="disable">リセット</Button>
          <Text style={styles.resetText}>リセット回数：残り3回</Text>
        </View>
        <Button color="outline">上記のお題で散歩する</Button>
      </View>
    </View>
  )
}

// スタイル定義
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  themeWrapper: {
    width: '100%',
    height: '30%',
  },
  titleBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#BDBDBD',
  },
  titleText: {
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
  },
  themeButtonWrapper: {
    // height: '100%',
    // marginTop: 40,
    // marginBottom: 40,
    // justifyContent: 'center',
  },
  disableButtonWrapper: {
    marginTop: 12,
  },
  resetButtonWrapper: {
    marginBottom: 20,
  },
  resetText: {
    color: theme.palette.text.main,
    fontSize: theme.fontSize.sm,
    textAlign: 'center',
    marginTop: 2,
  },
})

export default ThemeCreateTemplate
