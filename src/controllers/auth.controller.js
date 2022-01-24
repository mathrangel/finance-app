const knex = require('../database')


module.exports = {
    async get(req, res, next) {
        try {
            res.send({msg: 'METHOD GET'})
        } catch (e) {
            console.error(e)
        }
    },
    async store(req, res, next) {
        try {
            res.send({msg: 'METHOD STORE'})
        } catch (e) {
            console.error(e)
        }
    },
}