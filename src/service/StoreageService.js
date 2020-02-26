import HttpService from './HttpService'

export default class StoreageService extends HttpService {
  static api = process.env.VUE_APP_STOREAGE_API

  upload (data) {
    var json = Object.assign({
      'message': 'Upload',
      'content': data
    })
    const api = this.api + 'upload?fileType=jpeg'
    return this.post(json, api)
  }
}
