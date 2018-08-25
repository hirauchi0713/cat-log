const moment = require('moment')
const chalk = require('chalk')

function createLogger(category) {

  const DEFAULT_LEVEL = 'info'

  const levels = [
    'none',
    'fatal',
    'error',
    'warn',
    'info',
    'debug',
    'trace',
  ]

  const colors = [
    null,
    chalk.magenta,
    chalk.red,
    chalk.yellow,
    chalk.green,
    chalk.cyan,
    chalk.gray,
  ]

  return levels.reduce((a,c)=>{

    function level2i(level) { return levels.indexOf(level) }

    function makeLogger(logLevelNo) {
      const coloring = colors[logLevelNo]
      const label = c.toUpperCase()
      return function() {
        const args = Array.prototype.slice.call(arguments)
        const m = moment()
        const head = coloring(`[${m.format('YYYY-MM-DD HH:mm:ss')}][${category}][${label}]`)
        args.unshift(head)
        console.log.apply(null, args)
      }
    }

    function nop() {}

    function categoryLevel() {
      if (! category) { return DEFAULT_LEVEL }
      return process.env[`LOGGER_LEVEL_${category}`] || DEFAULT_LEVEL
    }

    if (level2i(c) <= level2i(categoryLevel())) {
      a[c] = makeLogger(level2i(c))
    } else {
      a[c] = nop
    }
    return a
  }, {})

}

module.exports = createLogger
