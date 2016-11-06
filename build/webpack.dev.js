var webpack = require('webpack');
var server = require('webpack-dev-server');
var config = require('./webpack.config');

new server(webpack(config), {
  inline: true,
  compress: true,
  stats: {
    chunks: false,
    children: false,
    colors: true
  },
  historyApiFallback: true,
  publicPath: config.output.publicPath
}).listen(9090, function() {
  console.log('server is start');
});
