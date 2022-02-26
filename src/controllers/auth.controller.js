const knex = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    async get(req, res, next) {
      try {
        await knex('users').select().then(data => {
          res.send(data)
        })
      } catch (e) {
        console.error(e)
      }
    },

    async getById(req, res, next) {
      try {
        const { id } = req.body
        
        if(!id) return res.status(400).send('Usuário não foi encontrado.')

        await knex('users').select('id', 'name', 'email', 'created_at').where({ id: id })
        .then(data => {
          res.send(data)
        })

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

    async login(req, res, next) {
      try {
          const {
            email,
            password
          } = req.body
          
          const userBcrypt = await knex('users').select().where({ email: email }).first()

          const validate = await bcrypt.compare(password, userBcrypt.password)

          if (!validate) res.status(400).send({ msg: 'A Senha inserida está incorreta.' })
          
          const token = jwt.sign({ email: email }, process.env.JWTWEBTOKEN, { expiresIn: 300 })

          if (!token) res.status(403).send({ msg: 'Erro de Autenticação' })

          return res.send({ auth: true, token })

      } catch (e) {
          console.error(e)
        }
    }
}