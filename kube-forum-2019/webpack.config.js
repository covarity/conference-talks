/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var glob = require("glob");

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    '@babel/polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
      test: /\.md$/,
      use: [ {
        loader: 'raw-loader',

        options: {
          gfm: false
        }
      }]
    },
     {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }],
      include: __dirname
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'raw-loader'
      }],
      include: __dirname
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'url-loader',

        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      }],
      include: path.join(__dirname, 'assets')
    },
    {
      test: /\.svg$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      include: glob.sync(
        `${__dirname}/presentation/slides/**/**/**/images/`
      ),
    },
    {
      test: /\.png$/,
      loader: 'url-loader',
      include: glob.sync(
        `${__dirname}/presentation/slides/**/**/**/images/`
      ),
      options: {
        mimetype: 'image/png'
      }
    },
    {
      test: /\.png$/,
      use: [{
        loader: 'url-loader',

        options: {
          mimetype: 'image/png'
        }
      }],
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.gif$/,
      use: [{
        loader: 'url-loader',

        options: {
          mimetype: 'image/gif'
        }
      }],
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.jpg$/,
      use: [{
        loader: 'url-loader',

        options: {
          mimetype: 'image/jpg'
        }
      }],
      include: path.join(__dirname, 'assets')
    }]
  }
};
