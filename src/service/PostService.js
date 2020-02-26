// import swal from 'sweetalert'
import HttpService from './HttpService'

export default class PostService extends HttpService {
  static api = process.env.VUE_APP_POST_API

  add (data) {
    const api = this.api + 'add'
    return this.post(data, api)
  }

  edit (data) {
    const api = this.api + 'edit'
    return this.put(data, api)
  }

  editDraft (data) {
    const api = this.api + 'editDraft'
    return this.put(data, api)
  }

  delete (data) {
    const api = this.api + 'delete'
    return this.put(data, api)
  }

  deleteDraft (data) {
    const api = this.api + 'deleteDraft'
    return this.put(data, api)
  }

  find (data, param) {
    const api = this.api + 'find'
    return this.post(data, api, param)
  }

  findById (data) {
    const api = this.api + 'findById'
    return this.get(data, api)
  }

  findDraft (data, param) {
    const api = this.api + 'findDraft'
    return this.post(data, api, param)
  }

  findDraftById (data) {
    const api = this.api + 'findDraftById'
    return this.get(data, api)
  }

  publish (data) {
    const api = this.api + 'publish'
    return this.put(data, api)
  }
}
