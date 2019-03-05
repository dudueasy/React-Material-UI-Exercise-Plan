const path = require('path')
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base-config')


const serverConfig = {
  entry: {
    app: "./src/server-entry.js"
  }
  ,
  target: "node",
  output:
    {
      filename: "server-entry.js",
      libraryTarget:
        "commonjs2",
      path:
        path.join(__dirname, "../dist"),
    }
  ,
}


module.exports = merge(baseConfig, serverConfig)
