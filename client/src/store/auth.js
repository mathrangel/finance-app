import jwt_decode from 'jwt-decode'

export default {
  namespaced: true,
  state: {
    user: null,
    loggedIn: false
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_AUTHENTICATION(state, status) {
      state.loggedIn = status
    }
  },
  actions: {
    async ActionSetToken({ commit }, payload) {
      const user = jwt_decode(payload.token)
      
      commit('SET_AUTHENTICATION', true)
      commit('SET_USER', user)
    }
  }
}