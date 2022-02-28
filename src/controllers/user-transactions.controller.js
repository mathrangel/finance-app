const UserTransactions = require('../models/UserTransactions')
const knex = require('../database')

module.exports = {
  async get(req, res, next) {
    try {
      const { user_id } = req.params

      const user_transactions = await UserTransactions.get().where({ user_id: user_id, deleted_at: null })

      return res.send(user_transactions)
    } catch (e) {
      console.error(e)
    }
  },

  async getById(req, res, next) {
    try {
      const { transaction_id } = req.params
      
      const transaction = await UserTransactions.get().where({ id: transaction_id, deleted_at: null }).first()
      
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
        type_transaction,
        value
      } = req.body

      const transaction = new UserTransactions({
        title: title,
        user_id: user_id,
        category_id: category_id,
        type_transaction: type_transaction,
        value: value
      })
      await transaction.save()

      return res.status(201).send({ msg: 'Transação registrada com sucesso!' })

    } catch (e) {
      res.send(e)
    }
  },

  async delete(req, res, next) {
    try {
      const { transaction_id } = req.params

      await knex('user_transactions').update({ deleted_at: new Date() }).where({ id: transaction_id })

      res.send({ msg: 'Movimentação deletada com sucesso!' })
    } catch (e) {
      console.error(e)
    }
  }
}