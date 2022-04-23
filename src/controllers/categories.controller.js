const Categories = require('../models/Categories')
const UserTransactionsTypes = require('../models/UserTransactionTypes')
const Colors = require('../models/Colors')

module.exports = {
  async get(req, res, next) {
    try {
      const { type_transaction_id } = req.params

      const categoriesSelectColumns = [
        'id',
        'type_transaction_id as type_transaction',
        'color_id as color',
        'created_at',
        'created_by',
        'deleted_at'
      ]

      const categories = await Categories.get().select(categoriesSelectColumns).where({ type_transaction_id: type_transaction_id })

      for(const category of categories) {
        category.type_transaction = await UserTransactionsTypes.get().where({ id: category.type_transaction }).first()

        category.color = await Colors.get().where({ id: category.color }).first()
      }

      return res.send(categories)
    } catch (e) {
      console.error(e)
    }
  },
}