import transactionsService from "@/services/user-transactions.service"
import transactionTypesService from "@/services/transaction-types.service"

export default {
  namespaced: true,
  state: {
    transactions: {
      data: null,
      types: null
    },
    earns: {
      data: null,
      length: null,
      total: 0
    },
    spends: {
      data: null,
      length: null,
      total: null
    },
    totalBalance: null
  },
  mutations: {
    SET_TRANSACTIONS(state, payload) {
      state.transactions.data = payload
    },
    SET_EARNS(state, payload) {
      state.earns.data = payload
      state.earns.length = payload.length
      for(let i = 0; i < payload.length; i++) {
        state.earns.total += payload[i].value
      }
    },
    SET_SPENDS(state, payload) {
      state.spends.data = payload
      state.spends.length = payload.length
      for(let i = 0; i < payload.length; i++) {
        state.spends.total += payload[i].value
      }
    },
    SET_TOTAL(state, payload) {
      for(let i = 0; i < payload.length; i++) {
        if(payload[i].type_transaction_id == 1) {
          state.totalBalance += payload[i].value
        }
        else if(payload[i].type_transaction_id == 2) {
          state.totalBalance -= payload[i].value
        }
      }
    },
    ADD_TRANSACTION(state, payload) {
      state.transactions.data.push(payload)
      if(payload.type_transaction_id == 1) {
        state.earns.data.push(payload)
        state.earns.total += payload.value
        state.totalBalance += payload.value
      }
      else if(payload.type_transaction_id == 2) {
        state.spends.data.push(payload)
        state.spends.total += payload.value
        state.totalBalance -= payload.value
      }
    },
    SET_TRANSACTIONS_TYPES(state, payload) {
      state.transactions.types = payload
    }
  },
  actions: {
    async ActionSetTransactions({ commit }, payload) {
      commit('SET_TRANSACTIONS', payload)
      
      const earns = payload.filter(e => e.type_transaction.id === 1)
      commit('SET_EARNS', earns)

      const spends = payload.filter(e => e.type_transaction.id === 2)
      commit('SET_SPENDS', spends)

      commit('SET_TOTAL', payload)
    },
    async ActionPostTransaction({ commit }, payload) {
      transactionsService.storeTransactions(payload)
        .then(e => {
          commit('ADD_TRANSACTION', e.data.data)
          commit('SET_TOTAL', e.data.data)
        })
    },
    async ActionGetTransactionsTypes({ commit }) {
      transactionTypesService.getTransactionTypes()
      .then(e => {
        commit('SET_TRANSACTIONS_TYPES', e.data)
      })
    }
  }
}