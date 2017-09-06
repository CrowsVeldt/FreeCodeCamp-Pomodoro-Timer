const path = require('path')
const merge = require('webpack-merge')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
}

const commonConfig = {
  entry: {
    index: PATHS.src
  },
  output: {
    path: PATHS.dist,
    filename: '[name].bundle.js'
  }
}

const productionConfig = () => commonConfig

const developementConfig = () => {
  const config = {
    host: process.env.HOST,
    port: process.env.PORT
  }

  return Object.assign(
  {},
  commonConfig,
  config
)
}

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig)
  }
  return merge(commonConfig, developementConfig)
}
