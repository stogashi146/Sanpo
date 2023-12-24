## プロジェクト作成

プロジェクト作成コマンド
`expo init Sanpo --template expo-template-blank-typescript`

EsLint、Prettierの同銃
https://deku.posstree.com/react-native/eslint-prettier-husky-lint-staged/

## ライブラリ

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

| ディレクトリ名 | API 通信    | State | Style | 依存関係         | 説明                 |
| :------------- | :---------- | :---- | :---- | :--------------- | :------------------- |
| Parts          | ×           | ×     | ○     | parts            |                      |
| Templates      | △           | ○     | ○     | parts, templates |                      |
| Views          | ○（client） | ○     | △     | parts, templates |                      |
| app            | ×           | ×     | ×     | views            | ルーティングのみ行う |

https://zenn.dev/overflow_offers/articles/20220523-component-design-best-practice

## インプット元教材

[React Native, Firebase, Expo でアプリ開発をゼロから始めよう！](https://www.udemy.com/course/react-native-ios-android/)
[GitHub](https://github.com/shunwitter/MemoApp4)

## デザイン

[Figmaで作成した大まかなモック](<https://www.figma.com/file/dIXdiVc2ddCESOnJAgEbog/MemoApp-(%E3%82%B3%E3%83%94%E3%83%BC)?type=design&node-id=437%3A2630&mode=design&t=egBmsk731qr2FHvG-1>)
