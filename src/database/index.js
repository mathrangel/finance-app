const knex = require('knex') ({
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_SCHEMA,
      user: process.env.DB_USER,
      password: process.env.PASSWORD
    }
  })

  module.exports = knex
  
