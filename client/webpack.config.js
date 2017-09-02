const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: '../client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../client/dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['../client/dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './',
    hot: true
  }
};