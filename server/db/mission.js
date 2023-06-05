const connection = require('./connection')

function getMission(db = connection) {
  return db('mission').select()
}

module.exports = {
  getMission,
}
