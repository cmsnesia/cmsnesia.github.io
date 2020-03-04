import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import BootstrapVue from 'bootstrap-vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
/* eslint-disable camelcase */
import { required, alpha, alpha_spaces } from 'vee-validate/dist/rules'

extend('required', required)
extend('alpha', alpha)
/* eslint-disable camelcase */
extend('alpha_spaces', alpha_spaces)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
