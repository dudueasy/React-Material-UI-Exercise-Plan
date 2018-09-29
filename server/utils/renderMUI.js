const React = require('react')
const ReactDOMServer = require('react-dom/server')

const fs = require('fs')
const path = require('path')
const {SheetsRegistry} = require('react-jss/lib/jss')


const App = require('../../dist/server-entry').MUIApp


function renderFullPage(html, css) {
  const template = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf-8')
  HTMLWithMarkUp = template.replace('<app></app>', html)
  HTMLWithMarkUp = template.replace('<css></css>', css)
  return HTMLWithMarkUp
}

module.exports = function handleRenderForMUI(req, res) {
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(App)

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css))
}
