/**
 *  @author Elvan Diano
 *  @email elvandiano@gmail.com
 *  @description Manage the how Access Tokens are being stored and retreived from storage.
 *               Current implementation stores to localStorage. Local Storage should always be accessed through this instace.
 */

const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const USER_KEY = 'user_detail'
const USERNAME = 'username'

const Storage = {
  getAccessToken () {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },

  getRefreshToken () {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },

  saveAccessToken (accessToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  },

  saveRefreshToken (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  },

  clearSession () {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  },

  getUser () {
    return JSON.parse(localStorage.getItem(USER_KEY))
  },

  saveUser (userDetail) {
    return localStorage.setItem(USER_KEY, JSON.stringify(userDetail))
  },

  saveUserName (username) {
    return localStorage.setItem(USERNAME, username)
  }
}

export default Storage
