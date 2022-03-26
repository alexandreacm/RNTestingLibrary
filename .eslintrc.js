module.exports = {
  env: {
    es2021: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react','@react-native-community'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }]
  }
};
