const connection = require('./connection')

// function getMission(db = connection) {
//   return db('mission').select()
// }

function getPrimary(db = connection) {
  return db('primary_missions').select()
}

function getDeployment(db = connection) {
  return db('deployment_zones').select()

}

function getRules(db = connection) {
  return db('mission_rules').select()

}

function getSecondary(db = connection) {
  return db('secondary_missions').select()

}

function getGambits(db = connection) {
  return db('gambits').select()
}

module.exports = {
  getPrimary
  
}

module.exports = {
  getSecondary
  
}

module.exports = {
  getDeployment
  
}

module.exports = {
  getRules
  
}

module.exports = {
  getGambits
  
}