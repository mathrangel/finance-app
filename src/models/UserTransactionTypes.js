const knex = require('../database')

module.exports = class Categories {
  constructor({
    id, 
    title,
    created_at,
    deleted_at
  }) {
    this.id = id,
    this.title = title,
    this.created_at = created_at,
    this.deleted_at = deleted_at
  }

  static get() {
    return knex('type_transaction')
  }
}