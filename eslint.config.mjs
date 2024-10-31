import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends('airbnb-base', 'prettier'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'import/no-extraneous-dependencies': 0,
      'no-console': 0,
      'no-underscore-dangle': 0,
      'no-restricted-globals': 0,
      'linebreak-style': 0,
      'no-param-reassign': 0,
      'no-prototype-builtins': 0,
      'import/prefer-default-export': 0,
      'no-undef': 0,
      'consistent-return': 0,
      'no-unused-vars': 0,
    },
  },
]
