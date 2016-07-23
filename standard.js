module.exports = {
  extends: 'tslint-config-standard',
  rules: {
    "max-line-length": [false],
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
    ]
  }
}
