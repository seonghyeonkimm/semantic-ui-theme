const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    alias: {
      '../../theme.config$': path.resolve(__dirname, 'assets/stylesheets/semantic-ui/theme.config')
    },
  },
  entry: './app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin(
      {
        $: 'jquery',
        'jQuery': 'jquery',
        'jquery': 'jquery',
        'window.jQuery': 'jquery',
      }
    ),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

};
