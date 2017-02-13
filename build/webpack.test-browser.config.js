const webpack = require('webpack')
const base = require('./webpack.base.config')

const config = Object.assign({}, base, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  resolve: {
    alias: Object.assign({}, base.resolve.alias, {
      'create-api': './create-api-client.js'
    })
  },
  plugins: (base.plugins || []).concat([
    // strip comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"test"'
    }),
  ])
})


module.exports = config
