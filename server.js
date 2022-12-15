const app = require('./src/app.js')
const port = 1313

app.get('/', (req, res) => {
  res.send({ message: 'Boas vindas ao portal Pra Quem Doar!' })
})

app.listen(port, () => {
  console.log(`API listening in port ${port}`)
})
