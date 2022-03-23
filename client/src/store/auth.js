import jwt_decode from 'jwt-decode'

export default {
  namespaced: true,
  state: {
    token: null,
    user: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    }
  },
  actions: {
    async ActionSetToken({ commit }, payload) {
      const user = jwt_decode(payload.token)
      
      commit('SET_USER', user)
      commit('SET_TOKEN', payload.token)
    }
  }
}