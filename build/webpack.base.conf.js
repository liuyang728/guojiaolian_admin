const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, '..', 'src/webapp'),
  entry: {
    login: './views/login/index.js'
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist/assets')
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
      },
      {
        test: /\.(png|jpg|gif|ttf|woff)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '哈哈哈哈',
      filename: 'login.html',
      template: './template.html',
      favicon: './favicon.ico'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  externals: {
    vue: 'Vue',
    'element-ui': 'element-ui'
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '..', 'src/webapp/components'),
      Utils: path.resolve(__dirname, '..', 'src/webapp/utils')
    }
  }
};
