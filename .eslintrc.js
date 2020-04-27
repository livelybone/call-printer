module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
  },
  'env': {
    'browser': true,
    'commonjs': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  'rules': {
    'no-useless-constructor': 0,
    'no-undef': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'prettier/prettier': 2,
    'no-console': [2, { allow: ["warn", "error"] }],
    'no-shadow': 2,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
  },
  'plugins': ['@typescript-eslint', 'prettier'],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
