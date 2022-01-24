const express = require('express')

const route = express.Router()

const authController = require('../controllers/auth.controller')

route.get('/get', authController.get)
route.get('/store', authController.store)


module.exports = route