const React = require('react')
const ReactDOMServer = require('react-dom/server')

const fs = require('fs')
const path = require('path')
const {SheetsRegistry} = require('react-jss/lib/jss')


const App = require('../../dist/server-entry').default
const {sheetsRegistry } = require('../../dist/server-entry')


function renderFullPage(html, css) {
  const template = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf-8')

  let HTMLWithMarkUp = template.replace('<app></app>', html)
  HTMLWithMarkUp = HTMLWithMarkUp.replace('<css></css>', css)
  return HTMLWithMarkUp
}

module.exports = function handleRenderForMUI(req, res) {
  // Create a sheetsRegistry instance.

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(App)

  // Grab the CSS from our sheetsRegistry.
  // css 只会在 renderToString 执行后完成, 需要使用 App 中注入的 sheetsRegistry 对象
  // 因此 serverEntry 模块也需要将 内部使用的 sheetsRegistry 导出
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client.

  res.send(renderFullPage(html, css))
}
