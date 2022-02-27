const knex = require('../database')

module.exports = class User {
  constructor({
    id,
    name,
    email, 
    password
  }) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.password = password
  }

  save() {
    return knex('users')
    .insert({
      name: this.name,
      email: this.email,
      password: this.password
    })
  }

  static get() {
    return knex('users')
  }
}