const { api } = require('@/config/axios.config.js') 
import { getToken } from '../utils/getToken'

export default {
  getCategories: (type_transaction_id) => {
    return api.get(`/transactions/categories/${type_transaction_id}`, {
      headers: {
        Authorization: getToken()
      } 
    })
  }
}