const baseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development'
});
