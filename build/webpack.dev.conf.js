const baseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');
console.log(path.join(__dirname, '..', 'dist'));
console.log(path.resolve(__dirname, '..', 'dist'));
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.join(__dirname, '..', 'dist/assets'),
    open: true,
    openPage: 'login.html'
  }
});
