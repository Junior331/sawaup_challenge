module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/jsx-no-useless-fragment': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
