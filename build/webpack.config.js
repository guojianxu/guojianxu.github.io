var webpack = require('webpack');

var config = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: __dirname + '/../dist',
    filename: '[name].js',
    publicPath: '/dist/',
  },
  module: {}
};

config.module.loaders = [];

config.module.loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: ['babel']
});

config.module.loaders.push({
  test: /\.(css)$/,
  loaders: ['style', 'css']
});

module.exports = config;
