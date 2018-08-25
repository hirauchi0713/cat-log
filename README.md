# cat-log
A categorized colorful console logger.

## INSTALL
```
npm install --save cat-log
```

## Usage
test.js
```
const logger = require('cat-log')('test')
const obj = { foo: 'foo', bar: 'bar' }
const arr = [ 0, 1, 2, 3, obj ]
logger.fatal('fatal msg', obj, arr)
logger.error('error msg', obj, arr)
logger.warn ('warn msg' , obj, arr)
logger.info ('info msg' , obj, arr)
logger.debug('debug msg', obj, arr)
logger.trace('trace msg', obj, arr)
```

command line
```
$ LOGGER_LEVEL_test=trace node test.js
```

![output](https://raw.githubusercontent.com/hirauchi0713/cat-log/readme-images/output.png)

## AUTHOR
Hideyuki Hirauchi<hideyuki@hirauchi.com>

## LICENSE
MIT
