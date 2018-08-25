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
logger.fatal('fatal msg', arr)
logger.error('error msg', arr)
logger.warn ('warn msg' , arr)
logger.info ('info msg' , arr)
logger.debug('debug msg', arr)
logger.trace('trace msg', arr)
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
