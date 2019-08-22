const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.default,
  rules: {
    ...fabric.default.rules,
    'no-unused-expressions': 0,
    'no-shadow': 0
  },
  globals: {
    page: true,
  },
};
