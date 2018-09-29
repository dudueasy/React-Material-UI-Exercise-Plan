const path = require('path')
const fs = require('fs')
const express = require('express')
const handleRenderForMUI = require('./utils/renderMUI')


const app = express()

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.get('*', handleRenderForMUI)


app.use((error, req, res, next) => {
  console.log('An error happen: ', error)
  res.json(error)
})


app.listen(3000, () => console.log('Express app listening on port 3000!'))

