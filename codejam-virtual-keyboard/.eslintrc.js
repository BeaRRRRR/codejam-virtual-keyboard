module.exports = {
  'extends': [
    'airbnb-base'
  ],
  'parser': 'babel-eslint',
  'rules': {
    'max-len': ['error', {
      'ignoreTrailingComments': true,
      'code': 100
    }]
  },
  'env': {
    browser: true
  }
};
