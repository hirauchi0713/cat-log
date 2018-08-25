const gl = require('./gorilog')
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
