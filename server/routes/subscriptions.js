const express = require('express')
const router = express.Router()
// const subscriptions = require('../database/models/Subscriptions')
const subscriptionsController = require('../controllers/subscriptionsController')

router.post(
    '/subscriptions',
     (req, res) => {
         subscriptionsController.create(req, res)

    }
)

router.get(
    '/subscriptions',
    (req, res) => {
        subscriptionsController.findByusername(req, res)
    })

module.exports = router