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
const cl = require('gorilog')
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

doAll(cl())
doAll(cl('test'))
doAll(cl('model/DB'))
doAll(cl('model/Mail'))
doAll(cl('csev1'))
doAll(cl('csev2'))
doAll(cl('csev3'))
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
gorilog is freely distributable under the terms of the MIT license.

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
