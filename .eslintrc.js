module.exports = {
    "extends": ["airbnb-base", "prettier"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": ["error"],
      "no-param-reassign": ["error", { "props": false }],
      "import/named": "off",
      "camelcase": "off",
    },
    "env": {
        mocha: true,
    }
};
