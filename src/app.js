require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('./database/dbConnect')
const donorRoutes = require('./routes/donorRoutes')
const institutionRoutes = require('./routes/institutionRoute')
const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use('/praquemdoar/donor', donorRoutes)
app.use('/praquemdoar/institution', institutionRoutes)

module.exports = app
