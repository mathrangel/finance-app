const { api } = require('@/config/axios.config.js') 

export default {
  newUser: (user) => {
    return api.post('/auth/store', user)
  },
  login: (user) => {
    return api.post('/auth/login', user)
  }
}