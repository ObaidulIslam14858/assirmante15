const express = require('express')
const app = express()

app.use(express.json())

// Routes
const messageRoutes = require('./routes/messageRoutes')
app.use('/api/message', messageRoutes)

module.exports = app
