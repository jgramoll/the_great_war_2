const webpackConfig = require('./webpack.karma.config')

const files = [
  'app/**/components/**/*.jsx',
  'app/**/reducers/**/*.jsx',
  'app/**/actions/**/*.jsx',
  'app/libs/!(i18n)/**/*.js'
]
module.exports = function (config) {
  config.set({
    frameworks: ['intl-shim', 'mocha', 'chai'],

    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      ...files.map(f => { return {pattern: f, watched: false} })
    ],

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    preprocessors: files.reduce((hash, filename) => {
      hash[filename] = ['webpack', 'sourcemap']
      return hash
    }, {}),

    reporters: [ 'progress', 'coverage-istanbul' ],
    coverageIstanbulReporter: {
      reports: ['html', 'lcov', 'text-summary'],
      fixWebpackSourcePaths: true,

      thresholds: {
        emitWarning: false,
        global: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        }
      }
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
