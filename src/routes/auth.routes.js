const express = require('express')
const { tokenAuthentication } = require('../utils/verifyAuth')

const route = express.Router()

const authController = require('../controllers/auth.controller')

route.get('/get', authController.get)
route.post('/store', authController.store)
route.post('/login', authController.authentication)

module.exports = route