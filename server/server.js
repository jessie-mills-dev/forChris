const express = require('express')
const path = require('path')

const incursionRoutes = require('./routes/incursion')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/incursion', incursionRoutes)
// server.use('/api/v1/mission', missionRoutes) // update this
// server.use('/api/v1/mission', missionRoutes) // update this
server.use('/api/*', (req, res) => res.sendStatus(404))
server.get('*', (req, res) => {res.sendFile(path.resolve('server/public/index.html'))})
module.exports = server
