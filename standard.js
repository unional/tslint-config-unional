module.exports = {
  extends: 'tslint-config-standard',
  rules: {
    "one-line": [
      true,
      "check-open-brace",
      "check-whitespace"
    ],
    "brace-style": [
      true,
      "stroustrup",
      {
        "allowSingleLine": true
      }
    ],
    "semicolon": false
  }
}
