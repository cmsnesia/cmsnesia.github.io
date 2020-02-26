/**
 *  @author Elvan Diano
 *  @email elvandiano@gmail.com
 *  @description Auth module using vuex
 */

import AuthService from '../service/AuthService'
import storage from '../commons/config/storage.config'
import router from '../router'

const authService = AuthService.build()
const state = {
  authenticating: false,
  accessToken: '',
  refreshToken: '',
  authenticationErrorCode: 0,
  authenticationError: '',
  authenticatedUser: storage.getUser()
}

const getters = {
  loggedIn: (state) => {
    return !!state.accessToken
  },

  authenticationErrorCode: (state) => {
    return state.authenticationErrorCode
  },

  authenticationError: (state) => {
    return state.authenticationError
  },

  authenticating: (state) => {
    return state.authenticating
  },

  authenticatedUser: (state) => {
    return state.authenticatedUser
  }
}

const actions = {
  async login ({ commit }, { passsword, username }) {
    commit('loginRequest')

    const requestData = Object.assign({ username, passsword })
    const res = await authService.login(requestData)
    if (res) {
      commit('loginSuccess', { accessToken: res.accessToken, refreshToken: res.refreshToken })
      router.push(router.history.current.query.redirect || '/')
      return true
    }
  },

  async logout ({ commit }) {
    await authService.logout()
    commit('logoutSuccess')
    router.push('/login')
  }
}

const mutations = {
  loginRequest (state) {
    state.authenticating = true
    state.authenticationError = ''
    state.authenticationErrorCode = 0
    state.authenticatedUser = {}
  },

  loginSuccess (state, { accessToken, refreshToken }) {
    state.accessToken = accessToken
    state.refreshToken = refreshToken
    state.authenticating = false
  },

  loginError (state, { errorCode, errorMessage }) {
    state.authenticating = false
    state.authenticationErrorCode = errorCode
    state.authenticationError = errorMessage
    state.authenticatedUser = {}
  },

  logoutSuccess (state) {
    state.accessToken = ''
    state.authenticatedUser = {}
  }
}

export const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
