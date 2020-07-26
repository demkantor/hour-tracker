module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    jsdom: true,
    Promise: true,
    nw: true,
    Vue: true,
    Vuex: true,
    VueRouter: true,
    store: true,
    router: true
  },
  plugins: [
    'jest',
    'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:vuejs-accessibility/recommended',
    'tjw-base',
    'tjw-vue'
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      'Property[method="true"]'
    ],
    'vue/attribute-hyphenation': [
      'error', 
      'never', 
      {
        'ignore': [
          'label-for',
          'offset-sm'
        ]
      }
    ],
    'space-before-function-paren': [
      'error', 
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        'components': ['Label'],
        'required': {
          'some': ['nesting', 'id']
        },
        'allowChildren': false
      }
    ]
  }
};
