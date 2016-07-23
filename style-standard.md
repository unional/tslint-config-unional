# Standard Style

Extending [`tslint-config-standard`](https://github.com/blakeembrey/tslint-config-standard) thus following [JavaScript Standard Style](http://standardjs.com/).

JavaScript Standard Style do not recommend altering the style.
This configuration make necessary changes only to make it work accross IDEs.
If you do not use those IDEs, I recommend you just use `tslint-config-standard` instead.

```js
// tslint.json
{
  "extends": "tslint-config-unional/standard"
}
```

## Key highlights

- Rely on ASI
- Use single qoutes
- Fast to write code
- Work with folding

## Supported IDEs

IDEs that work fine with `tslint-config-standard`:

- [Visual Studio Code](http://code.visualstudio.com)

IDEs that needs `tslint-config-unional/standard`:

- [atom](https://atom.io)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [PhpStorm](https://www.jetbrains.com/phpstorm/)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/)
