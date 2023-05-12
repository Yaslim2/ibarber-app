module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@react-native-community'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import-helpers',
    'import',
    'no-relative-import-paths'
  ],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off'
      }
    }
  ],
  ignorePatterns: ['.eslintrc.js', '**/node_modules/**'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'semi': [2, 'always'],
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { 'allowSameFolder': true }
    ],
    'import/no-unresolved': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { overrides: { constructors: 'off' } }
    ],
    '@typescript-eslint/ban-types': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/@react-navigation/',
          '/@shopify/',
          '/@components/',
          '/@/',
          'module',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true
        }
      }
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'throw'
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'no-void': 'off',
    'no-console': ['error', { allow: ['error', 'warn'] }],
    // extremes
    'arrow-body-style': ['error', 'as-needed'],
    'react-native/no-inline-styles': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};
