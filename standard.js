var tsc = require('typescript')
var compareVersions = require('compare-versions')

var setting = {
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
    "no-consecutive-blank-lines": [true, 2],
    "no-console": {
      "severity": "warning",
      "options": [
        "assert",
        "count",
        "log",
        "trace",
        "debug"
      ]
    },
    "no-empty":  [true, "allow-empty-catch"],
    "one-line": [
      true,
      "check-open-brace",
      "check-whitespace"
    ],
    "one-variable-per-declaration": [true, "ignore-for-loop"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }]
  }
}

if (compareVersions(tsc.version, '2.9') >=0) {
  settings.rules['no-unused-variable'] = undefined
}

module.exports = setting
