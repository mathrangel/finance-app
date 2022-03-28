const knex = require('../database')

module.exports = {
  async get(req, res) {
    try {
      const types_transaction = await knex('type_transaction').select()
        
      return res.send(types_transaction)
    } catch (e) {
      console.error(e)
    }
  }
}