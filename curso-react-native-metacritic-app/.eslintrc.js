const { rules } = require("eslint-config-prettier");

// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prittier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
