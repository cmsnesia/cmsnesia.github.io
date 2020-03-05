
import HttpService from './HttpService'

export default class ProfileService extends HttpService {
    
    static api = process.env.VUE_APP_PROFILE_API

    add (data) {
       const api = this.api + 'add'
       return this.post(data, api)
    }

    edit (data) {
        const api = this.api + 'edit'
        return this.put(data, api)
    }

    findById () {
        const api = this.api + 'findById'
        return this.get({}, api)
    }
}