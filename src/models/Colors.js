const knex = require('../database')

module.exports = class Categories {
  static get() {
    return knex('system_colors')
  }
}