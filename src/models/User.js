const knex = require('../database')

module.exports = class User {
  constructor({
    id,
    name,
    email, 
    password,
    created_at,
    deleted_at
  }) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.password = password
    this.created_at = created_at,
    this.deleted_at = deleted_at
  }
  
  static get() {
    return knex('users')
  }
  
  save() {
    return knex('users')
    .insert({
      name: this.name,
      email: this.email,
      password: this.password
    })
  }
}