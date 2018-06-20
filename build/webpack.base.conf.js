const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    login: path.resolve(__dirname, '..', 'src/webapp/views/login/index.js')
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist/assets'),
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$|\.postcss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
      // chunkFilename: 'css/[id].css'
    }),
    new HtmlWebpackPlugin({
      title: '哈哈哈哈',
      filename: 'login.html',
      template: path.resolve(__dirname, '..', 'src/webapp/views/login/index.html')
    })
  ]
};
