import jwt_decode from 'jwt-decode'
import userService from '../services/auth.service'

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
    MUTATION_LOGOUT() {
      localStorage.clear()
    }
  },
  actions: {
    async ActionLogIn({ commit }, payload) {
      await userService.login(payload).then(e => {
        const user = jwt_decode(e.data.token)
        localStorage.setItem('auth.token', e.data.token)
        localStorage.setItem('user', JSON.stringify(user))
        commit('MUTATION_SET_USER_DATA', { user, status: true })
      })
    },
    async ActionAutoLogin({ commit }) {
      const e = JSON.parse(localStorage.getItem('user'))
      
      if(e) commit('MUTATION_SET_USER_DATA', { user: e, status: true })
    },
    async ActionAutoLogout({ commit }) {
      commit('MUTATION_LOGOUT')
      commit('MUTATION_SET_USER_DATA', { user: null, status: false })
    }
  }
}