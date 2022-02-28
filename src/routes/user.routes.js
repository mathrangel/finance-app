const express = require('express')
const { tokenVerify } = require('../utils/verifyAuth')

const route = express.Router()

const userController = require('../controllers/user.controller')
const userTransactionsController = require('../controllers/user-transactions.controller')

//USER
route.get('/', tokenVerify, userController.get)
route.get('/:user_id/getById', tokenVerify, userController.getById)

//USER TRANSACTIONS
route.get('/transactions/:user_id', tokenVerify, userTransactionsController.get)
route.get('/transactions/:transaction_id/getById', tokenVerify, userTransactionsController.getById)
route.post('/transactions/store', tokenVerify, userTransactionsController.store)
route.delete('/transactions/:transaction_id/delete', tokenVerify, userTransactionsController.delete)

module.exports = route