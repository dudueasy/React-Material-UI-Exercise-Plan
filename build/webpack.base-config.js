module.exports = {

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      // 定义编译 jsx 文件使用的loader(babel-loader)
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
    ]
  }
}