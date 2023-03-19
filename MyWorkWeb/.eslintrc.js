module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
  ],
  parserOptions: {
      parser: '@babel/eslint-parser'
  },
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'quotes': [2, 'single'], // 单引号
      'semi': [2, 'always'], // 以;结尾
      'indent': [2, 4, { 'SwitchCase': 1 }],  //缩进4空格
      'comma-dangle': [2, 'never'],
      'default-case': 2 ,
      'eqeqeq': [2, 'allow-null'],
      'no-unused-vars': 'warn',
      'vue/multi-word-component-names': 0
  }
};
