# cut-the-mustard
Checking your JS environment is up to scratch

## Conditions

Cut the mustard tests makes available three levels of competence that a browser can have. Check [cut the mustard revisited](https://justmarkup.com/log/2015/02/26/cut-the-mustard-revisited/) for details. The three levels are **Basic**, **Advanced** and **Offline.**

## Installation

Install the module to your project. Recommended that you use the save flag to record its use in your package.json file.

```
$ npm install --save cut-the-mustard
```

## Usage

Require the appropriate test.

```js
var basicTest = require('cut-the-mustard/basic');

// OR

var basicTest = require('cut-the-mustard').basic;
```

Use it to test your context, which by default is the window object.

```js
if (basicTest()) {
  // All good
}

// OR

if (basicTest(window)) {
  // All good
}
```

## Documentation

Check the source for conditions of each level or refer to the [article](https://justmarkup.com/log/2015/02/26/cut-the-mustard-revisited/)
