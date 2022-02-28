const User = require('../models/User')
const UserTransactions = require('../models/UserTransactions')

module.exports = {
  async get(req, res, next) {
    try {
      const { user_id } = req.params

      const user_transactions = await UserTransactions.get().where({ user_id: user_id })

      return res.send(user_transactions)
    } catch (e) {
      console.error(e)
    }
  },
}