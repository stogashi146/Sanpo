import { StyleSheet, type ViewStyle, type TextStyle } from 'react-native'
import { theme } from '../../theme'
import { Button as RneButton } from '@rneui/themed'
import type { ReactNode } from 'react'

export interface ButtonColor {
  color: 'primary' | 'secondary' | 'disable' | 'outline'
}

interface ButtonProps extends Pick<ButtonColor, 'color'> {
  onPress?: () => void
  style?: ViewStyle
  containerStyle?: ViewStyle
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  color,
  style,
  containerStyle,
  children,
}) => {
  const getButtonStyles = (
    buttonColor: 'primary' | 'secondary' | 'disable' | 'outline',
  ): [ViewStyle, TextStyle] => {
    switch (buttonColor) {
      case 'primary':
        return [
          { backgroundColor: theme.palette.primary.main },
          { color: theme.palette.text.white },
        ]
      case 'secondary':
        return [
          { backgroundColor: theme.palette.secondary.main },
          { color: theme.palette.text.white },
        ]
      case 'disable':
        return [
          { backgroundColor: theme.palette.gray.main },
          { color: theme.palette.text.white },
        ]
      case 'outline':
        return [
          {
            backgroundColor: '#FAFAFA',
            borderWidth: 0.5,
            borderRadius: 12,
          },
          { color: theme.palette.primary.main },
        ]
      default:
        return [{}, {}]
    }
  }

  const [buttonStyle, textStyle] = getButtonStyles(color)

  return (
    <>
      <RneButton
        onPress={onPress}
        buttonStyle={[buttonStyle, style]}
        containerStyle={[styles.button, containerStyle]}
        titleStyle={[styles.buttonText, textStyle]}
        activeOpacity={0.7}
      >
        {children}
      </RneButton>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.palette.primary.main, // 画像に合わせた背景色
    borderRadius: 10,
    width: '100%', // 画像に合わせた幅
    shadowColor: '#000', // 影の色
    shadowOffset: { width: 0, height: 2 }, // 影の位置
    shadowOpacity: 0.25, // 影の透明度
    shadowRadius: 3.84, // 影のぼかし半径
    elevation: 5, // Androidのための影の設定
  },
  buttonText: {
    fontSize: theme.fontSize.md,
    fontWeight: '500',
    color: theme.palette.text.white,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    opacity: 1,
  },
})

export default Button
