const knex = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = {
    async get(req, res, next) {
      try {
        const user = await User.get().select()
        return res.send(user)
      } catch (e) {
        console.error(e)
      }
    },

    async getById(req, res, next) {
      try {
        const { user_id } = req.params
        
        const user = await User.get().select().where({ id: user_id })
       
        return res.send(user)
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
      
        if(password !== confirmPassword) return res.status(401).send({ msg: 'As senhas não correspondem.' })

        const hashedPassword = await bcrypt.hash(password, 10)

        const emailValidation = await knex('users').select().where({ email: email }).first()
        if(emailValidation) return res.status(400).send({ msg: 'Este email já está cadastrado.' })

        const user = new User({ name: name, email: email, password: hashedPassword })
        await user.save()

        return res.status(201).send({ msg: 'Usuário criado com sucesso!', data: user})
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
          
          const user = await User.get().select('password').where({ email: email }).first()

          const validatePassword = await bcrypt.compare(password, user.password)
          if (!validatePassword) res.status(400).send({ msg: 'A Senha inserida está incorreta.' })
          
          const token = jwt.sign({ email: email }, process.env.JWTWEBTOKEN, { expiresIn: 300 })
          if (!token) res.status(403).send({ msg: 'Erro de Autenticação' })

          return res.send({ auth: true, token })

      } catch (e) {
          console.error(e)
        }
    }
}