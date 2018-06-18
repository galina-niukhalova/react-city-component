const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader'
        },
      },
      {
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        test: /\.scss$/
      }
    ],
  },
    plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ]

};