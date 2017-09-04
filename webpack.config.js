var path = require('path')

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  }
}
