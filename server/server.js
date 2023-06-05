const express = require('express')
const path = require('path')

const missionRoutes = require('./routes/mission')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/mission', missionRoutes)
server.use('/api/*', (req, res) => res.sendStatus(404))
server.get('*', (req, res) => {res.sendFile(path.resolve('server/public/index.html'))})
module.exports = server
