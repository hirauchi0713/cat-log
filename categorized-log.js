const moment = require('moment')
const chalk = require('chalk')

const LOGGER_LEVEL_PREFIX = 'LOGGER_LEVEL_'
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'
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

  return LEVELS.reduce((a,c)=>{

    function level2i(level) { return LEVELS.indexOf(level) }

    function categoryLevel() {
      if (! category) { return DEFAULT_LEVEL }
      return process.env[LOGGER_LEVEL_PREFIX+category] || DEFAULT_LEVEL
    }

    if (level2i(c) > level2i(categoryLevel())) {

      a[c] = function() {} // nop

    } else {

      const coloring = COLORS[level2i(c)]
      const label = c.toUpperCase()
      a[c] = function() {
        const args = Array.prototype.slice.call(arguments)
        const head = coloring(`[${moment().format(DATE_FORMAT)}][${category}][${label}]`)
        args.unshift(head)
        console.log.apply(null, args)
      }

    }

    return a
  }, {})

}

module.exports = createLogger
