const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      },
      {
        test: /\.wav$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}
