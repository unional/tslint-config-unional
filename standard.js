module.exports = {
  extends: 'tslint-config-standard',
  rules: {
    // https://github.com/Microsoft/TypeScript/issues/10392
    // Allow lines to be mis-align in those cases,
    // so that this style stays as pure `standard` instead of `semistandard`
    // This happens relatively rare so I justify it.
    "align": false,
    "brace-style": [
      true,
      "stroustrup",
      {
        "allowSingleLine": true
      }
    ],
    "curly": false,
    "max-line-length": false,
    "member-ordering": false,
    "one-line": [
      true,
      "check-open-brace",
      "check-whitespace"
    ],
    "one-variable-per-declaration": [true, "ignore-for-loop"]
  }
}
