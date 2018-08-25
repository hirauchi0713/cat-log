[![Version npm](https://img.shields.io/npm/v/gorilog.svg?style=flat-square)](https://www.npmjs.com/package/gorilog)
[![MIT License][license-image]][license-url]

# 🦍 gorilog
A simple regex-categorized colorful console logger.

## INSTALL
```
yarn add gorilog
```

## Usage
test.js
```js
const gl = require('gorilog')
const obj = { foo: 'foo', bar: 'bar' }
const arr = [ 0, 1, 2, 3, obj ]

function doAll(logger) {
  console.log(logger.category, logger.level)
  logger.fatal('fatal msg', arr)
  logger.error('error msg', arr)
  logger.warn ('warn msg' , arr)
  logger.info ('info msg' , arr)
  logger.debug('debug msg', arr)
  logger.trace('trace msg', arr)
}

doAll(gl())
doAll(gl('test'))
doAll(gl('model/DB'))
doAll(gl('model/Mail'))
doAll(gl('csev1'))
doAll(gl('csev2'))
doAll(gl('csev3'))
```

```
$ yarn test
```
![output](https://raw.githubusercontent.com/hirauchi0713/gorilog/readme-images/output.png)

```
$ yarn test2
```
![output](https://raw.githubusercontent.com/hirauchi0713/gorilog/readme-images/output2.png)

## AUTHOR
Hideyuki Hirauchi

## LICENSE
gorilog is freely distributable under the terms of the [MIT license][license-url].

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
