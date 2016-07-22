# tslint-config-unional

[`tslint`](https://github.com/palantir/tslint) extension package that follows [`my typescipt guidelines`](https://github.com/unional/typescript)

## Design Principles

There are several configurations available in this package.
Although they are different as they are designed for different programers,
here are the principles that they all follows:

- They are designed to be used by team
- Each team member can use their own IDE of choice
- The formatter available on each IDE should work with each configuration
- Code should look well and consistent on each IDE with folding

## Usage

```sh
# Install
npm install tslint-config-unional
```

```js
// tslint.json
{
  // "extends": "tslint-config-unional/standard",
  "extends": "tslint-config-unional",
  "rules": {
    // your customization
  }
}
```

## Style: tslint-config-unional

A balanced configuration that is suitable for team who used to more "traditional" way of writing JavaScript.

It follows close to the [airbnb]...



## LICENSE

MIT
