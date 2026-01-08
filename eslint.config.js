import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import js from '@eslint/js'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      'dist/**',
      '**/dist/**',
      'node_modules/**',
      '**/node_modules/**',
      'storybook-static/**',
      '**/storybook-static/**',
      'coverage/**',
      '**/coverage/**',
      '.pnpm-store/**',
      '**/.pnpm-store/**',
    ],
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
        },
      },
    },
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'import/prefer-default-export': 'off',
      'no-restricted-exports': [
        'error',
        { restrictDefaultExports: { direct: true } },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'no-alert': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function'],
          unnamedComponents: ['arrow-function'],
        },
      ],
      'react/display-name': 'off',
      'react-hooks/incompatible-library': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.stories.tsx',
            '**/*.test.tsx',
            '**/*.test.ts',
            'vitest.config.ts',
          ],
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'no-plusplus': 'off',
      'no-restricted-exports': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
  },
  {
    files: ['src/icons/**/*.tsx'],
    rules: {
      'no-restricted-exports': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['.storybook/**/*.{ts,tsx}'],
    rules: {
      'import/no-unresolved': 'off',
      'no-restricted-exports': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['src/util/class-names.tsx'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: [
      '*.js',
      '*.mjs',
      'scripts/**/*.{js,mjs}',
      '.storybook/main.ts',
      'vite.config.ts',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-restricted-exports': 'off',
    },
  },
  {
    files: ['vitest.config.ts'],
    rules: {
      'import/no-unresolved': 'off',
      'no-restricted-exports': 'off',
    },
  },
  {
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'import/no-unresolved': 'off',
    },
  },
]
