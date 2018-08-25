# categorized-log
A categorized colorful console logger.

## INSTALL
```
npm install --save categorized-log
```

## Usage
test.js
```
const cl = require('categorized-log')
const obj = { foo: 'foo', bar: 'bar' }
const arr = [ 0, 1, 2, 3, obj ]

console.log('---testLogger---')
const testLogger = cl('test')
testLogger.fatal('fatal msg', arr)
testLogger.error('error msg', arr)
testLogger.warn ('warn msg' , arr)
testLogger.info ('info msg' , arr)
testLogger.debug('debug msg', arr)
testLogger.trace('trace msg', arr)

console.log('---defaultLogger---')
const defaultLogger = cl()
defaultLogger.fatal('fatal msg', arr)
defaultLogger.error('error msg', arr)
defaultLogger.warn ('warn msg' , arr)
defaultLogger.info ('info msg' , arr)
defaultLogger.debug('debug msg', arr)
defaultLogger.trace('trace msg', arr)
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
