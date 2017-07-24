const webpack = require('webpack')
const { resolve } = require('path')
const baseConfig = require('./webpack.config')

baseConfig.module.rules.unshift({
  test: /^(?!.*test\.jsx?$).*\.jsx?$/i,
  include: resolve('app'),
  loader: 'istanbul-instrumenter-loader'
})

const config = {
  devtool: 'inline-source-map',

  plugins: [
    new webpack.ProvidePlugin({ 'Promise': 'promise-polyfill' }),
  ],

  resolve: baseConfig.resolve,
  module: baseConfig.module
}

module.exports = config