const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/', require('./api'))



module.exports = app;