import jwt_decode from 'jwt-decode'
import authService from '../services/auth.service'

export default {
  namespaced: true,
  state: {
    user: null,
    loggedIn: false
  },
  mutations: {
    MUTATION_SET_USER_DATA(state, payload) {
      state.user = payload.user
      state.loggedIn = payload.status
    },
    MUTATION_LOGOUT(state) {
      localStorage.clear()
      state.user = null
      state.loggedIn = false
    }
  },
  actions: {
    async ActionLogIn({ commit }, payload) {
      await authService.login(payload)
      .then(e => {
        localStorage.setItem('auth.token', e.data.token)
        
        const user = jwt_decode(e.data.token)
        
        const time = user.exp - Math.floor(new Date().getTime() / 1000)
        setTimeout(() => {
          commit('MUTATION_LOGOUT')
        }, time * 1000)
        
        commit('MUTATION_SET_USER_DATA', { user, status: true })
      })
    },
    async ActionAutoLogin({ commit }) {
      const e = localStorage.getItem('auth.token')

      if(!e) return
      const user = jwt_decode(e)

      if(user.exp - Math.floor(new Date().getTime() / 1000) < 0) commit('MUTATION_LOGOUT')

      if(user) commit('MUTATION_SET_USER_DATA', { user: user, status: true })
    },
    ActionLogout({ commit }) {
      commit('MUTATION_LOGOUT')
    }
  }
}