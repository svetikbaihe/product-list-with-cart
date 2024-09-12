import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintConfigPrettier from 'eslint-config-prettier'
import typescriptEslingPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    languageOptions: {
      globals: globals.browser,
      parser: typescriptEslintParser,
    },

    ignores: ['dist/**', '**/*.config.js', '!**/eslint.config.js'],

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslingPlugin,
    },

    settings: {
      react: {
        version: 'detect',
        pragma: 'React',
        fragment: 'Fragment',
      },
    },

    rules: {
      "no-console": "warn",

      "react/react-in-jsx-scope": "off",

      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
      
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      ...eslintConfigPrettier.rules,
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat['recommended'],
]


