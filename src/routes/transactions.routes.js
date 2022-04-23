const express = require('express')
const { tokenVerify } = require('../utils/verifyAuth')

const route = express.Router()

const transactionsController = require('../controllers/transactions-types.controller')
const categoriesController = require('../controllers/categories.controller')

route.get('/', tokenVerify, transactionsController.get)
route.get('/categories/:type_transaction_id', tokenVerify, categoriesController.get)

module.exports = route