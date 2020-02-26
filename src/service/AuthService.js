/**
 *  @author Elvan Diano
 *  @email elvandiano@gmail.com
 */

// import swal from 'sweetalert'
import storage from '../commons/config/storage.config'
import HttpService from './HttpService'

export default class AuthService extends HttpService {
  static api = process.env.VUE_APP_TOKEN_API

  login (data) {
    const api = this.api + 'request'
    return this.post(data, api).then((response) => {
      if (response.accessToken) {
        storage.saveAccessToken(response.accessToken)
        storage.saveRefreshToken(response.refreshToken)
        return response
      }
    })
  }

  changePassword (newPassword, verifyNewPassword) {
    const api = this.api + 'changePassword'
    return this.put({}, api, { 'newPassword': newPassword, 'verifyNewPassword': verifyNewPassword }).then((response) => {
      if (response.accessToken) {
        storage.saveAccessToken(response.accessToken)
        storage.saveRefreshToken(response.refreshToken)
        return response
      }
    })
  }

  logout () {
    // const api = this.api + 'logout'
    // return this.post({}, api).then((response) => {
    //   HttpService.removeHeader()
    storage.clearSession()
    //   if (response.status === 200) {
    //     storage.clearSession()
    //   }
    // })
  }
}
