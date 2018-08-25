const cl = require('./categorized-log')
const obj = { foo: 'foo', bar: 'bar' }
const arr = [ 0, 1, 2, 3, obj ]

const testLogger = cl('test')
console.log('---testLogger---')
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
