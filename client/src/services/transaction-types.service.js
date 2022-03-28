const { api } = require('@/config/axios.config.js') 
import { getToken } from '../utils/getToken'

export default {
  getTransactionTypes: () => {
    return api.get('/transactions', {
      headers: {
        Authorization: getToken()
      } 
    })
  }
}