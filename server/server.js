const express = require('express')
const path = require('path')

const missionRoutes = require('./routes/mission_rules')
const primaryRoutes = require('./routes/primary_missions')
const secondaryRoutes = require('./routes/secondary_missions')
const deploymentRoutes = require('./routes/deployment_zones')
const gambitsRoutes = require('./routes/gambits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/mission_rules', missionRoutes) 
server.use('/api/v1/primary_missions', primaryRoutes) 
server.use('/api/v1/secondary_missions', secondaryRoutes) 
server.use('/api/v1/deployment_zones', deploymentRoutes) 
server.use('/api/v1/gambits', gambitsRoutes) 
server.use('/api/*', (req, res) => res.sendStatus(404))
server.get('*', (req, res) => {res.sendFile(path.resolve('server/public/index.html'))})
module.exports = server
