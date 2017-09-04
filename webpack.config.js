var path = require('path')

module.exports = {
  entry: './src/index.ds',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  }
}
