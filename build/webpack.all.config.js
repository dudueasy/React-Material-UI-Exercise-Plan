const clientConfig = require('./webpack.client.config.js')
const serverConfig = require('./webpack.server.config.js')
const os = require('os')

const threadLoader = require('thread-loader')

threadLoader.warmup(
  {
  workers: os.cpus().length
}, [
    // modules to load
    // can be any module, i. e.
    'babel-loader',
  ]
  );


module.exports = [clientConfig, serverConfig] 