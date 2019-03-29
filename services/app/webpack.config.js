const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/client/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'An messenger',
      template: './src/client/index.html',
    }),
    new webpack.EnvironmentPlugin(['URL', 'PORT']),
  ],
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  node: {
    fs: 'empty',
  },
};
