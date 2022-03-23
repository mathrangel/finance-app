const { api } = require('@/config/axios.config.js') 
import { getToken } from '../utils/getToken'

export default {
  getTransactions: (userId) => {
    return api.get(`/user/transactions/${userId}`, {
      headers: {
        Authorization: getToken()
      }
    })
  }
}