<template>
  <div class="app login flex-row align-items-center">
    <div class="container">
      <b-row class="row justify-content-center">

        <div class="col-md-6 login-logo" align="center">
          <img src="@/assets/img/logoLogin1.png" height="695" width="572"/>
        </div>
        <div class="col-md-6 login-wrapper" align="right">
          <div class="login-box" align="justify">
            <div class="login-body">
              <div class="login-title mb-4">
                <b-alert variant="warning"
                         dismissible
                         :show="dismissCountDown"
                         @dismissed="dismissCountDown=0"
                         @dismiss-count-down="countDownChanged"
                         class="pl-3">
                  {{ message }}
                </b-alert>
                <h3 class="mb-3">Selamat Datang di <br/> cmsnesia</h3>
                <a style="cursor: default; font-size: x-small">Login menggunakan Username dan Password yang telah terdaftar</a>
              </div>
              <b-input-group class="mb-4">
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="text" class="form-control" placeholder="Username"
                              v-model="username" autocomplete="username email"/>
              </b-input-group>
              <b-input-group class="mb-4">
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" class="form-control" placeholder="Password"
                              v-model="password" autocomplete="current-password"/>
              </b-input-group>
              <b-row>
                <b-col cols="12">
                  <div align="center">
                    <b-button type="submit" @click="onLogin" variant="info" style="width: 100%" class="px-4">Login
                    </b-button>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      message: '',
      countDownChanged: '',
      dismissCountDown: 0
    }
  },
  watch: {
    username () {}
  },
  computed: {
    ...mapGetters('auth', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ])
  },
  methods: {
    /**
     * - @param username
     * - @param password
     */
    ...mapActions('auth', [
      'login'
    ]),

    onLogin () {
      this.login({ username: this.username, passsword: this.password })
    }
  }
}
</script>

<style scoped>
  #dataInput {
    border: 0;
    border-radius: 10px;
  }
  .login {
    background-color: white;
  }
</style>
