var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/less/main.less',
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
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      }
    ]
  }
};
