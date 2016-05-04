var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/main.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    publicPath: '/',
    filename: 'dist/main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-2']
        }
      }
    ]
  }
};
