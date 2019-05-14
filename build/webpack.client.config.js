const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base-config')

let clientConfig = {
  // 定义入口文件
  entry: {
    // 使用 path.join 来获得绝对路径
    app: path.join(__dirname, '../src/index.code-splitting.js')
  },
  output: {
    // 定义输出文件名, 这里使用 webpack 变量, [name] 是入口名, 此处对应 app, [hash]是打包完成的文件的哈希值, 用于和浏览器缓存协作.
    filename: '[name].js',
    // bundle 输出位置
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/public/',
    chunkFilename: '[name].js',
  },
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/public/',
    hot: true,
    overlay: {
      errors: true
    },
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/template.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
}

module.exports = merge(baseConfig, clientConfig)
