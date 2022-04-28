const { api } = require('@/config/axios.config.js') 
import { getToken } from '../utils/getToken'

export default {
  getTransactions: (userId) => {
    return api.get(`/user/transactions/${userId}`, {
      headers: {
        Authorization: getToken()
      }
    })
  },
  storeTransactions: (data) => {
    return api.post(`/user/transactions/store`, data, {
      headers: {
        Authorization: getToken()
      }
    })
  },
  deleteTransaction: (transaction_id) => {
    return api.delete(`/user/transactions/${transaction_id}/delete`, {
      headers: {
        Authorization: getToken()
      }
    })
  }
}