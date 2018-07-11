const baseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.join(__dirname, '..', 'dist/assets'),
    open: true,
    openPage: 'login.html'
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
});
