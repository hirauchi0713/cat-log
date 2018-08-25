const logger = require('./cat-log')('test')
const obj = { foo: 'foo', bar: 'bar' }
const arr = [ 0, 1, 2, 3, obj ]
logger.fatal('fatal msg', arr)
logger.error('error msg', arr)
logger.warn ('warn msg' , arr)
logger.info ('info msg' , arr)
logger.debug('debug msg', arr)
logger.trace('trace msg', arr)
