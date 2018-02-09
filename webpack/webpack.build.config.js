const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');
const config = require('./config');

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: config.cssOptions },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader', options: config.sassOptions },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
        },
      },
    }),
    new UglifyJsPlugin(),
    new ExtractTextPlugin(config.outputCSS),
    new HtmlWebpackPlugin({
      filename: config.entryHTML,
      template: config.outputHTML,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
});
