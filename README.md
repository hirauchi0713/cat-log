# categorized-log
A categorized colorful console logger.

## INSTALL
```
npm install --save categorized-log
```

## Usage
test.js
```
const logger = require('categorized-log')('test')
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

![output](https://raw.githubusercontent.com/hirauchi0713/categorized-log/readme-images/output.png)

## AUTHOR
Hideyuki Hirauchi

## LICENSE
MIT
