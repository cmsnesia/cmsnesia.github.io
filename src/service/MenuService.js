// import swal from 'sweetalert'
import HttpService from './HttpService'
// eslint-disable-next-line no-unused-vars
// import storage from "../commons/config/storage.config";

export default class MenuServe extends HttpService {
  static api = process.env.VUE_APP_MENU_API

  add (data) {
    const api = this.api + 'add'
    return this.post(data, api)
  }

  edit (data) {
    const api = this.api + 'edit'
    return this.put(data, api)
  }

  delete (data) {
    const api = this.api + 'delete'
    return this.put(data, api)
  }

  find (data, param) {
    const api = this.api + 'find'
    return this.post(data, api, param)
  }
}
