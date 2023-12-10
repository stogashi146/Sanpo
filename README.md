## プロジェクト作成

プロジェクト作成コマンド
`expo init Sanpo --template expo-template-blank-typescript`

EsLint、Prettierの同銃
https://deku.posstree.com/react-native/eslint-prettier-husky-lint-staged/

### ライブラリ

expo
eslint
expo-router
react-native-safe-area-context
react-native-screens
expo-linking
expo-constants
expo-status-bar
react-native-gesture-handler

## コンポーネント設計

| API 通信  | グローバル  | State | Style | 依存関係         |
| :-------- | :---------- | :---- | :---- | :--------------- |
| Parts     | ×           | ×     | ○     | parts            |
| Templates | △           | ○     | ○     | parts, templates |
| Views     | ○（client） | ○     | △     | parts, templates |
| Pages     | ○（ssr）    | ×     | ×     | views            |

https://zenn.dev/overflow_offers/articles/20220523-component-design-best-practice

## インプット元教材

[React Native, Firebase, Expo でアプリ開発をゼロから始めよう！](https://www.udemy.com/course/react-native-ios-android/)
