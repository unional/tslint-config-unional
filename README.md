# tslint-config-unional


[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]

[![Greenkeeper][greenkeeper-image]][greenkeeper-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]

[![Stories in Ready][waffle-image]][waffle-url]
[![Visual Studio Code][vscode-image]][vscode-url]

A [`tslint`](https://github.com/palantir/tslint) extension package with several styles to choose from.

## Design Principles

There are several configurations available in this package.
Although they are different as they are designed for different programers,
here are the principles that they all follows:

- They are designed to be used by team
- Each team member can use their own IDE of choice
- The formatter available on each IDE should work with each configuration
- Code should look well and consistent on each IDE with folding
  - so that when you stop by your team member's cube, the code looks the same.
  - i.e., unfortunately, no [tab]
- Thrive for easy to write (with fewest keystrokes) while keeping the code clean

## Usage

```sh
# Install
npm install tslint-config-unional
```

```js
// tslint.json
{
  "extends": "tslint-config-unional" // or other styles
}
```

## About Supported IDE

Within this project, I use the term IDE and editor interchangably in this context.
The line between IDE and editor is burring by the day anyway.

I list the IDEs supported for specific style that I or some collaborators have verified.
If your IDE of choice is not listed, it doesn't necessary mean the style doesn't work on your IDE.

Feel free to try it out, and let me know if it works for you or not so that I can update the list accordingly.
Also, the best thing to do and file issues on your IDE so that you can use the style that you like.

## Styles

- [Default](style-default.md)
- [Strict](style-strict.md)
- [Standard](style-standard.md) (based off of [`tslint-config-standard`](https://github.com/blakeembrey/tslint-config-standard))
- [Semi Standard](style-semi-standard.md)

## Versioning

- **patch** some rules are loosen thus will not cause build to fail.
- **minor** not used as adding rules will likely cause build to fail.
- **major** adding rules or adding new styles, or making rule more strict then before.

## LICENSE

MIT

[npm-image]: https://img.shields.io/npm/v/tslint-config-unional.svg?style=flat
[npm-url]: https://npmjs.org/package/tslint-config-unional
[downloads-image]: https://img.shields.io/npm/dm/tslint-config-unional.svg?style=flat
[downloads-url]: https://npmjs.org/package/tslint-config-unional
[travis-image]: https://img.shields.io/travis/unional/tslint-config-unional/master.svg?style=flat
[travis-url]: https://travis-ci.org/unional/tslint-config-unional?branch=master
[greenkeeper-image]:https://badges.greenkeeper.io/unional/tslint-config-unional.svg
[greenkeeper-url]:https://greenkeeper.io/
[semantic-release-image]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[vscode-image]:https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]:https://code.visualstudio.com/
[waffle-image]:https://badge.waffle.io/unional/tslint-config-unional.png?label=ready&title=Ready
[waffle-url]:https://waffle.io/unional/tslint-config-unional
