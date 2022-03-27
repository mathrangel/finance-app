export default {
  namespaced: true,
  state: {
    transactions: null,
    earns: null,
    spends: null
  },
  mutations: {
    SET_TRANSACTIONS(state, payload) {
      state.transactions = payload
    },
    SET_EARNS(state, payload) {
      state.earns = payload
    },
    SET_SPENDS(state, payload) {
      state.spends = payload
    }
  },
  actions: {
    async ActionSetTransactions({ commit }, payload) {
      commit('SET_TRANSACTIONS', payload)
      
      const earns = payload.filter(e => e.type_transaction_id === 1)
      commit('SET_EARNS', earns)

      const spends = payload.filter(e => e.type_transaction_id === 2)
      commit('SET_SPENDS', spends)
    },
  }
}