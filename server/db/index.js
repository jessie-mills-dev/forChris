const connection = require('./connection')

// function getMission(db = connection) {
//   return db('mission').select()
// }

function getIncursion(db = connection) {
  return db('incursion').select()
}

// Repeat with the other two

module.exports = {
  getIncursion
}
