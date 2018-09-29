const path = require('path')
const fs = require('fs')
const express = require('express')
const ReactDOMServer = require('react-dom/server')

const serverEntry = require('./dist/server-entry').default


const app = express()

app.use('/public', express.static(path.join(__dirname, './dist')));

app.get('*', (req, res, next) => {

  const template = fs.readFileSync('./dist/index.html', 'utf-8')

  appString = ReactDOMServer.renderToString(serverEntry)
  HTMLWithMarkUp = template.replace('<app></app>', appString)


  res.send(HTMLWithMarkUp)

})


app.use((error, req, res, next) => {
  console.log('An error happen: ', error)
  res.json(error)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))

