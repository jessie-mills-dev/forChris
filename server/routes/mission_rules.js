const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getRules()
    .then((results) => {
      res.json(results.map((mission) => mission))
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/missions_rules', (req, res) => {
  db.getIncursion()
    .then((results) => {
      res.json({ mission: results.map((mission) => mission) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})



module.exports = router