const knex = require('../database')

const Category = require('../models/Categories')
const UserTransactions = require('../models/UserTransactions')
const UserTransactionsTypes = require('../models/UserTransactionTypes')
const User = require('../models/User')
const Colors = require('../models/Colors')

module.exports = {
  async get(req, res, next) {
    try {
      const { user_id } = req.params

      const transactionsSelectColumns = [
        'id',
        'title',
        'value',
        'category_id as category',
        'type_transaction_id as type_transaction',
        'user_id as user',
        'created_at'
      ]

      const categoriesSelectColumns = [
        'id',
        'type_transaction_id as type_transaction',
        'color_id as color',
        'title',
        'created_at',
        'created_by',
        'deleted_at'
      ]

      const transactions = await UserTransactions.get().select(transactionsSelectColumns).where({ user_id: user_id, deleted_at: null }).orderBy('created_at', 'desc')

      for(const transaction of transactions) {
        transaction.category = await Category.get().select(categoriesSelectColumns).where({ id: transaction.category }).first()
  
        transaction.category.type_transaction = await UserTransactionsTypes.get().where({ id: transaction.category.type_transaction }).first()

        transaction.category.color = await Colors.get().where({ id: transaction.category.color }).first()

        transaction.user = await User.get().select('id', 'name', 'email', 'created_at', 'deleted_at').where({ id: transaction.user }).first()

        transaction.type_transaction = await UserTransactionsTypes.get().where({ id: transaction.type_transaction }).first()
      }

      return res.send(transactions)
    } catch (e) {
      console.error(e)
    }
  },

  async getById(req, res, next) {
    try {
      const { transaction_id } = req.params
      
      const transaction = await UserTransactions.get().where({ id: transaction_id, deleted_at: null }).first()

      if(!transaction) return res.status(400).send({ msg: 'Essa movimenta????o n??o existe.' })
      
      return res.send(transaction)
    } catch (e) {
      console.error(e)
    }
  },

  async store(req, res, next) {
    try {
      const {
        title,
        user_id,
        category_id, 
        type_transaction_id,
        value,
        created_at
      } = req.body

      const categoriesSelectColumns = [
        'id',
        'type_transaction_id as type_transaction',
        'color_id as color',
        'title',
        'created_at',
        'created_by',
        'deleted_at'
      ]

      const transaction = new UserTransactions({
        title,
        user_id,
        category_id,
        type_transaction_id,
        value,
        created_at: new Date(created_at)
      })
      await transaction.save()

      const trans = {
        title,
        value,
        user: null,
        type_transaction: null,
        category: null,
        created_at: new Date(created_at)
      }

      trans.category = await Category.get().select(categoriesSelectColumns).where({ id: category_id }).first()

      trans.category.type_transaction = await UserTransactionsTypes.get().where({ id: trans.category.type_transaction }).first()

      trans.category.color = await Colors.get().where({ id:  trans.category.color }).first()

      trans.user = await User.get().select('id', 'name', 'email', 'created_at', 'deleted_at').where({ id: user_id }).first()

      trans.type_transaction = await UserTransactionsTypes.get().where({ id: type_transaction_id }).first()

      return res.status(201).send({ data: trans, msg: 'Transa????o registrada com sucesso!' })

    } catch (e) {
      res.send(e)
    }
  },

  async delete(req, res, next) {
    try {
      const { transaction_id } = req.params

      const transaction = await UserTransactions.get().where({ id: transaction_id, deleted_at: null }).first()
      if(!transaction) return res.status(400).send({ msg: 'Essa movimenta????o n??o existe.' })
      
      await knex('user_transactions').update({ deleted_at: new Date() }).where({ id: transaction_id })

      res.send(transaction_id)
    } catch (e) {
      console.error(e)
    }
  }
}