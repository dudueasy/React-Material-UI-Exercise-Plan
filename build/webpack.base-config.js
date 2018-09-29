module.exports = {

  resolve: {
    extensions: ['.js', '.jsx'],
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
}