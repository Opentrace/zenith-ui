const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  // Entry point to the project
  entry: [
    './node_modules/babel-polyfill/lib/index.js',
    path.resolve(__dirname, 'src/app/app.js'),
  ],
  // Webpack config options on how to obtain modules
  resolve: {
    // When requiring, you don't need to add these extensions
    extensions: ['.js', '.jsx', '.md', '.txt'],
    alias: {
      'zenith-ui': path.resolve(__dirname, '../src'),
    },
  },
  // Output file config
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // Name of output file
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    // Prevent moment from loading all the locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // Transfer Files
    new CopyWebpackPlugin([
      // {from: 'src/www/css', to: 'css'},
      // {from: 'src/www/images', to: 'images'},
      {from: 'src/www/index.html'},
      // {from: 'src/www/versions.json'},
    ]),
  ],
  module: {
    // Allow loading of non-es5 js files.
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets:['babel-preset-es2015', 'stage-1', 'react']
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
        include: path.resolve(__dirname, 'src/app/components/raw-code'),
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  }
};

module.exports = config;
