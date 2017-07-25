const config = require('./webpack.config')

const scssRule = config.module.rules[2]
scssRule.use[1].options.localIdentName = '[local]'

module.exports = config
