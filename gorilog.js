const moment = require('moment')
const chalk = require('chalk')

const LOGGER_LEVEL_PREFIX = 'LOGLEVEL_'
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DEFAULT_CATEGORY = 'default'
const DEFAULT_LEVEL = 'info'

const LEVELS = [
  'none',
  'fatal',
  'error',
  'warn',
  'info',
  'debug',
  'trace',
]

const COLORS = [
  null,
  chalk.magenta,
  chalk.red,
  chalk.yellow,
  chalk.green,
  chalk.cyan,
  chalk.gray,
]

// { regexp: level ... } dictionaly
const CATEGORIES = LEVELS.reduce((a,c)=>{
  const env = process.env[LOGGER_LEVEL_PREFIX+c.toUpperCase()]
  if (! env) {
    return a
  }
  env.split(',').forEach(e=>a[`^${e.trim()}$`] = c)
  return a
}, {})

function createLogger(category) {

  const logger = {}
  logger.category = category || DEFAULT_CATEGORY
  logger.level = CATEGORIES[
    Object.keys(CATEGORIES)
      .reverse()
      .find(key=>logger.category.match(key))] || DEFAULT_LEVEL

  const funcs = LEVELS.reduce((a,c)=>{

    if (LEVELS.indexOf(c) > LEVELS.indexOf(logger.level)) {
      a[c] = function() {} // nop
      return a
    }

    const coloring = COLORS[LEVELS.indexOf(c)]
    const label = c.toUpperCase()

    a[c] = function() {
      const args = Array.prototype.slice.call(arguments)
      const head = coloring(`[${moment().format(DATE_FORMAT)}][${logger.category}][${label}]`)
      args.unshift(head)
      console.log.apply(null, args)
    }
    return a
  }, {})

  Object.assign(logger, funcs)
  return logger
}

module.exports = createLogger
