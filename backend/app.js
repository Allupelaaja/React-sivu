const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const courseRouter = require('./controllers/courses')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
var path = require('path')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use(express.static('public'))

app.use('/api/courses', courseRouter)
// app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, '/apiPage.html'))
})

app.get('/cv', (req, res) => {
  res.sendFile(path.join(__dirname, '/resources/CV.pdf'))
})

app.get('/cv_en', (req, res) => {
  res.sendFile(path.join(__dirname, '/resources/CV_EN.pdf'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app