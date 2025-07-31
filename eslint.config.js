import eslint from '@eslint/js'
import * as importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config([
  eslint.configs.recommended,
  prettierPlugin,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,ts,tsx}'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: { import: importPlugin, 'simple-import-sort': simpleImportSortPlugin },
    rules: {
      'import/first': 'error',
      'import/no-cycle': 'warn',
      'import/no-duplicates': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^react-dom', '^@?\\w'],
            ['^@app', '^@pages', '^@widgets', '^@features', '^@entities', '^@shared'],
            ['^@', '^\\w'],
            ['^\\u0000', '^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['\\.css$', '\\.scss$'],
          ],
        },
      ],
    },
  },
])
