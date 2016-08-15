module.exports = {
  extends: 'tslint-config-standard',
  rules: {
    "align": [
      true,
      "statements"
    ],
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
