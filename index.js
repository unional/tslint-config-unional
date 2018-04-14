/**
 * This is the normal version.
 * Some rules are relaxed to enable faster development and less typing.
 */
var path = require('path');

module.exports = {
  rulesDirectory: path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
  "rules": {
    "align": [
      true,
      "statements"
    ],
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": true,
    "eofline": true,
    "forin": false,
    "indent": [
      true,
      "spaces"
    ],
    "interface-name": [true, "never-prefix"],
    "jsdoc-format": true,
    "label-position": true,
    "member-access": false,
    "member-ordering": [
      true,
      "static-before-instance"
    ],
    "no-any": false,
    "no-arg": true,
    "no-bitwise": false,
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": false,
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
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty":  [true, "allow-empty-catch"],
    "no-eval": true,
    "no-inferrable-types": false,
    "no-internal-module": true,
    "no-null-keyword": false,
    "no-require-imports": false,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unused-expression": true,
    "no-use-before-declare": false,
    "no-var-keyword": true,
    "no-var-requires": true,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-open-brace",
      "check-whitespace"
    ],
    "one-variable-per-declaration": [true, "ignore-for-loop"],
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "radix": false,
    "semicolon": [
      true,
      "always"
    ],
    "switch-default": true,
    "trailing-comma": [
      true,
      {
        "singleline": "never",
        "multiline": "never"
      }
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "typedef": [
      true,
      "property-declaration"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "space",
        "index-signature": "space",
        "parameter": "space",
        "property-declaration": "space",
        "variable-declaration": "space"
      }
    ],
    "variable-name": [
      true,
      "check-format",
      "allow-leading-underscore",
      "ban-keywords"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],
    // tslint-eslint-rules
    "brace-style": [
      true,
      "stroustrup",
      {
        "allowSingleLine": true
      }
    ]
  }
}
