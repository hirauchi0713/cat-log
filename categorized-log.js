const moment = require('moment')
const chalk = require('chalk')

const LOGGER_LEVEL_PREFIX = 'LOGGER_LEVEL_'
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

function createLogger(category) {

  const thisCategory = category || DEFAULT_CATEGORY
  const thisLevel = process.env[LOGGER_LEVEL_PREFIX+thisCategory] || DEFAULT_LEVEL

  return LEVELS.reduce((a,c)=>{

    if (LEVELS.indexOf(c) > LEVELS.indexOf(thisLevel)) {
      a[c] = function() {} // nop
      return a
    }

    const coloring = COLORS[LEVELS.indexOf(c)]
    const label = c.toUpperCase()

    a[c] = function() {
      const args = Array.prototype.slice.call(arguments)
      const head = coloring(`[${moment().format(DATE_FORMAT)}][${thisCategory}][${label}]`)
      args.unshift(head)
      console.log.apply(null, args)
    }
    return a
  }, {})

}

module.exports = createLogger
