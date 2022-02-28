const knex = require('../database')

module.exports = class UserTransactions{
  constructor({
    id,
    title,
    user_id,
    category_id,
    type_transaction,
    created_at,
    deleted_at
  }) {
    this.id = id,
    this.title = title,
    this.user_id = user_id,
    this.category_id = category_id,
    this.type_transaction = type_transaction,
    this.created_at = created_at,
    this.deleted_at = deleted_at
  }

  static get() {
    return knex('user_transactions')
  }

  save() {
    return knex('user_transactions')
    .insert({
      id: this.id ,
      title: this.title,
      user_id: this.user_id,
      category_id: this.category_id,
      type_transaction: this.type_transaction,
    })
  }
}