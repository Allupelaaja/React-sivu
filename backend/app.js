const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const courseRouter = require('./controllers/courses')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(express.static('build'));

app.use('/api/courses', courseRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app