const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send({ message: 'Boas vindas ao portal Pra Quem Doar!' })
})

app.listen(port, () => {
  console.log(`API listening in port ${port}`)
})
