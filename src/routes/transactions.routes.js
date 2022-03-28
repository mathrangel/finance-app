const express = require('express')
const { tokenVerify } = require('../utils/verifyAuth')

const route = express.Router()

const transactionsController = require('../controllers/transactions-types.controller')

route.get('/', tokenVerify, transactionsController.get)

module.exports = route