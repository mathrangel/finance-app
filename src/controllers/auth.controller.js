const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = {
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

      const emailValidation = await User.get().select().where({ email: email }).first()
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
        
        const token = jwt.sign({ email }, process.env.JWTWEBTOKEN, { expiresIn: 300 })
        if (!token) res.status(403).send({ msg: 'Erro de Autenticação' })

        return res.send({ token })

    } catch (e) {
        console.error(e)
      }
  }
}