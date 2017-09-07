const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader',
            options: {importLoaders: 1}},
          {loader: 'postcss-loader',
            options: {plugins: () => ([
              require('autoprefixer')()
            ])}
          }
        ]

      }
    ]
  }

})
