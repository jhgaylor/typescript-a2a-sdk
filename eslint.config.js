// @ts-check

import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';


export default [
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // ESLint’s base recommended rules
      ...js.configs.recommended.rules,
      // @typescript-eslint’s recommended rules
      ...tsPlugin.configs.recommended.rules,
      // Run Prettier as an ESLint rule
      ...eslintPluginPrettierRecommended.rules,
      // Make Prettier errors fail the lint
      'prettier/prettier': 'error',
    },
  },
]