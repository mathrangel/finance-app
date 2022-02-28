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
  
}