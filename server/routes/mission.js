const express = require('express')

const db = require('../db/mission')

const router = express.Router()

router.get('/', (req, res) => {
  db.getMission()
    .then((results) => {
      res.json({ mission: results.map((mission) => mission) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/result', (req, res) => {
  db.getMission()
    .then((results) => {
      res.json({ mission: results.map((mission) => mission) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})



module.exports = router
