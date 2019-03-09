import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {SheetsRegistry} from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import App from './Components/App'
import theme from './theme'
const favicon = require('serve-favicon')




const app = express()
require('dotenv').config();

const PORT = process.env.PORT || 3000
console.log("env", process.env)

// serve static file
app.use('/public', express.static('./dist'))
app.use(favicon('favicon.ico'))

app.get('/', (req, res) => {

  const sheetsRegistry = new SheetsRegistry();

  // Create a sheetsManager instance.
  const sheetsManager = new Map();
  const generateClassName = createGenerateClassName();

  // Render the component to a string.
  const MUIComponents = ReactDOMServer.renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <App/>
      </MuiThemeProvider>
    </JssProvider>
  )

  const css = sheetsRegistry.toString()

  const html = fs.readFileSync('./dist/index.html', 'utf-8')
    .replace('<app></app>', MUIComponents)
    .replace('<css></css>', css)


  res.send(html)
})

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}`)
})
