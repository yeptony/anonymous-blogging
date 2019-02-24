const withSass = require('@zeit/next-sass')
const webpack = require('webpack')
require('dotenv').config()
const compose = require('next-compose')

module.exports = compose([
  [withSass],
  {
    webpack: config => {
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
        return acc
      }, {})
      config.plugins.push(new webpack.DefinePlugin(env))
      return config
    }
  }
])
