const knex = require('../database')
const bcrypt = require('bcrypt')

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
            const {
                name,
                password,
                confirmPassword,
                email
            } = req.body
        
            if(password !== confirmPassword) return res.status(401).send('as senhas não correspondem')

            const hashedPassword = await bcrypt.hash(password, 10)

            const emailValidation = knex('users').select().where({ email: email }).first()
            if(emailValidation) return res.status(400).send('email already exists')

            await knex('users')
            .insert({
                name: name,
                password: hashedPassword,
                email: email
            })

            return res.status(201).send('criado com sucesso!')
        } catch (e) {
            console.error(e)
        }
    },
}