import Vuex from 'vuex'
import auth from './auth'
import transactions from './transactions'

export default new Vuex.Store({
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    transactions
  }
})