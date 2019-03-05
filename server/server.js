const path = require('path')
const fs = require('fs')
const express = require('express')
const handleRenderForMUI = require('./utils/renderMUI')


// init .env to process.env
require('dotenv').config()

const port = process.env.PORT || 3000

const app = express()

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.use('*', handleRenderForMUI)


app.use((error, req, res, next) => {
  res.json(error)
})


app.listen(port, () => console.log(`Express app listening on port: ${port} !`))

