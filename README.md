# 宮田 龍 ポートフォリオサイト

---

## 🙋‍♂️ 非エンジニア向け（更新・管理方法）

このプロジェクトは、宮田 龍（科学コミュニケーター）の活動実績を紹介するためのポートフォリオサイトです。
専門的な知識がなくても、以下の手順でテキストの修正や実績の追加が可能です。

### 1. プロフィールの修正
`/src/data/profile.ts` を編集します。
- 自己紹介文（bio）
- 肩書き（tagline）
- スキル（skills）
などが含まれています。

### 2. 実績（プロジェクト）の追加・修正
`/src/data/projects.ts` を編集します。
- 実績のタイトル、説明文、カテゴリー、期間などを管理しています。
- 新しい実績を追加したい場合は、既存の項目（ `{ ... }` で囲まれたブロック）をコピーして新しく作成します。

### 3. 画像の追加
新しく画像（サムネイルなど）を追加する場合は、以下のフォルダに保存してください。
`/public/images/projects/`

### 4. サイトへの反映（デプロイ）
1. 変更したファイルを保存し、GitHubのリポジトリに保存（プッシュ）します。
2. GitHub Actions という仕組みが自動的に動き、サイトを更新します。
3. 数分後に [本番サイト](https://ryu-miyata.github.io/Portfoliosite_myt/) に反映されます。

---

## 💻 開発者向け (For Engineers)

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```
