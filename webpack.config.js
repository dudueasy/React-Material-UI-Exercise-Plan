const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {

  // 定义入口文件
  entry: {
    // 使用 path.join 来获得绝对路径
    app: path.join(__dirname, './src/index.js')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@material-ui/core': '@material-ui/core/es'
    }
  },
  output: {
    // 定义输出文件名, 这里使用 webpack 变量, [name] 是入口名, 此处对应 app, [hash]是打包完成的文件的哈希值, 用于和浏览器缓存协作.
    filename: 'bundle.js',

    // bundle 输出位置
    path: path.join(__dirname, './dist'),

    // 定义bundle中静态资源的路径前缀
    // publicPath: '/public/',
  },
  module: {
    rules: [
      // 定义编译 jsx 文件使用的loader(babel-loader)
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      },
      // 定义 js 文件使用的 loader
      {
        test: /\.js$/,
        use: 'babel-loader',
        // 排除 node_modules 目录
        exclude:'/node_modules/'
      }]
  }   
  ,
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    contentBase: './dist',
    hot: true,
    overlay: {
      errors: true
    },
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/templete.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
}

