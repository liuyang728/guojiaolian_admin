const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    login: path.resolve(__dirname, '..', 'src/webapp/views/login/index.js')
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist/assets'),
    filename: 'js/[name].js'
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
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$|\.postcss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '哈哈哈哈',
      filename: 'login.html',
      template: path.resolve(__dirname, '..', 'src/webapp/views/login/index.html')
    })
  ]
};
