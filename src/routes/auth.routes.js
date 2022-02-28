const express = require('express')
const { tokenVerify } = require('../utils/verifyAuth')

const route = express.Router()

const authController = require('../controllers/auth.controller')

route.post('/store', authController.store)
route.post('/login', authController.login)

module.exports = route