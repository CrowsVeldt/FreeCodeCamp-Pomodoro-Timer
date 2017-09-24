const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './docs'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader',
            options: {importLoaders: 1, modules: true}},
          {loader: 'postcss-loader',
            options: {plugins: () => ([
              require('autoprefixer')()
            ])}
          }
        ]

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('docs'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('developement')
    }),
    new HtmlWebpackPlugin({
      title: 'Pomodoro Timer'
    })
  ]
})
