import transactionsService from "@/services/user-transactions.service"
import transactionTypesService from "@/services/transaction-types.service"
import categoriesService from "@/services/categories.service"

import { groupBy } from '@/utils/agroup'

export default {
  namespaced: true,
  state: {
    transactions: {
      data: null,
      types: null,
      categories: null
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
      for(let earn in payload) {
        for(let e of payload[earn]) {
          state.earns.total += e.value
        }
      }
    },
    SET_SPENDS(state, payload) {
      state.spends.data = payload
      state.spends.length = payload.length
      for(let spend in payload) {
        for(let e of payload[spend]) {
          state.spends.total += e.value
        }
      }
    },
    SET_TOTAL(state, payload) {
      if(payload.type_transaction.id == 1) {
        state.totalBalance += payload.value
      }
      else if(payload.type_transaction.id == 2) {
        state.totalBalance -= payload.value
      }
    },
    ADD_TRANSACTION(state, payload) {
      for(let i in payload) {
        if (i in state.earns.data && payload[i][0].type_transaction.id === 1) {
          state.earns.data[i].unshift(payload[i][0])
          state.earns.total += payload[i][0].value
          state.totalBalance += payload[i][0].value
        }
        else if(i in state.spends.data && payload[i][0].type_transaction.id === 2) {
          state.spends.data[i].unshift(payload[i][0])
          state.spends.total += payload[i][0].value
          state.totalBalance -= payload[i][0].value
        }
      }
    },
    SET_TRANSACTIONS_TYPES(state, payload) {
      state.transactions.types = payload
    },
    SET_CATEGORIES(state, payload) {
      state.transactions.categories = payload
    }
  },
  actions: {
    async ActionSetTransactions({ commit }, payload) {
      commit('SET_TRANSACTIONS', payload)
      
      const earns = payload.filter(e => e.type_transaction.id === 1)
      const earnItems = groupBy('created_at', earns)
      
      commit('SET_EARNS', earnItems)
      
      const spends = payload.filter(e => e.type_transaction.id === 2)
      const spendsItems = groupBy('created_at', spends)
      commit('SET_SPENDS', spendsItems)

      for(let i of payload) {
        commit('SET_TOTAL', i)
      }
    },
    async ActionPostTransaction({ commit }, payload) {
      transactionsService.storeTransactions(payload)
        .then(e => {
          const item = groupBy('created_at', [e.data.data])
          commit('ADD_TRANSACTION', item)
          commit('SET_TOTAL', e.data.data)
        })
    },
    async ActionGetTransactionsTypes({ commit }) {
      transactionTypesService.getTransactionTypes()
      .then(e => {
        commit('SET_TRANSACTIONS_TYPES', e.data)
      })
    },
    async ActionGetCategories({ commit }, payload) {
      categoriesService.getCategories(payload)
      .then(e => {
        commit('SET_CATEGORIES', e.data)
      })
    }
  }
}