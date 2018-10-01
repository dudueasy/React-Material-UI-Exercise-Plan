const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');

const commonConfig = {
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        // 排除 node_modules 目录
        exclude: '/node_modules/'
      }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@material-ui/core': '@material-ui/core/es'
    }
  },
}

const clientConfig = {
  ...commonConfig
  ,
  entry: {
    app: path.join(__dirname, './src/client.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/public/',
  },
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    contentBase: './dist',
    hot: true,
    overlay: {
      errors: true
    },
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/templete.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
}

const serverConfig = {
  ...commonConfig,
  target: 'node',
  entry: path.join(__dirname, './src/server.js'),
  output: {
    filename: 'server.js',
    path: path.join(__dirname, './dist'),
  },
  externals: [nodeExternals()]
}


module.exports = [clientConfig, serverConfig]
