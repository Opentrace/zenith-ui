const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:8081/',
   'webpack/hot/dev-server',
  './docs/index.jsx'],
  output: {
    path: path.join(__dirname, './docs/dist'),
    filename: 'index.js',
    publicPath: "dist/"
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './src'), path.resolve(__dirname, './docs')]
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({ browsers: ['last 2 versions'] })]
            }
          }]
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader?cacheDirectory',
          'eslint-loader',
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'main.css', allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['src', 'node_modules'],
    alias: {
      'zenith-ui': path.resolve(__dirname, './src'),
    },
  },
};
