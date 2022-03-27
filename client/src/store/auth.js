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
    MUTATION_LOGOUT(state) {
      localStorage.clear()
      state.user = null
      state.loggedIn = false
    }
  },
  actions: {
    async ActionLogIn({ commit }, payload) {
      await userService.login(payload).then(e => {
        const user = jwt_decode(e.data.token)
        localStorage.setItem('auth.token', e.data.token)
        commit('MUTATION_SET_USER_DATA', { user, status: true })
        
        const time = user.exp - Math.floor(new Date().getTime() / 1000)
        setTimeout(() => {
          commit('MUTATION_LOGOUT')
        }, time * 1000)
        
      })
    },
    async ActionAutoLogin({ commit }) {
      const e = localStorage.getItem('auth.token')

      if(!e) return
      const user = jwt_decode(e)

      if(user) commit('MUTATION_SET_USER_DATA', { user: user, status: true })
    }
  }
}