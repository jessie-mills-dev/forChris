const connection = require('./connection')

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
  getSecondary,
  getDeployment,
  getRules,
  getGambits,
  getPrimary
}