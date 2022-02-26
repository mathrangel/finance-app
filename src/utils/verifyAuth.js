const jwt = require('jsonwebtoken')

module.exports = {
  async tokenVerify(req, res, next) {
      const token = req.headers.authorization.split(' ')[1]
      jwt.verify(token, process.env.JWTWEBTOKEN, (err, data) => {
        if(err) return res.send(403)
        else {
          req.email = data.email
          next()
        }
      })
  }
}