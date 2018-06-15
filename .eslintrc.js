module.exports = {
  extends: ['plugin:vue/essential', 'standard'],
  env: {
    browser: true,
    node: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};
