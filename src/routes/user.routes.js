const express = require('express')
const { tokenVerify } = require('../utils/verifyAuth')

const route = express.Router()

const userController = require('../controllers/user.controller')

route.get('/get', tokenVerify, userController.get)
route.get('/:user_id/getById', tokenVerify, userController.getById)

module.exports = route