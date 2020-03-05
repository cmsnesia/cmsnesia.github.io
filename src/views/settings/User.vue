<template>
  <div>
    <b-card>
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group label="Kata sandi baru">
          <b-form-input type="password" v-model="form.newPassword" placeholder="Masukan kata sandi"></b-form-input>
        </b-form-group>
        <b-form-group label="Konfirmasi kata sandi baru">
          <b-form-input
            type="password"
            v-model="form.newPasswordConfirmation"
            placeholder="Masukan ulang kata sandi"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<style>
</style>

<script>

import swal from 'sweetalert'
import AuthService from '../../service/AuthService'

const authService = AuthService.build()

export default {
  data () {
    return {
      form: {
        newPassword: null,
        newPasswordConfirmation: null
      }
    }
  },
  methods: {
    onSubmit () {
      if (
        this.form.newPassword !== null &&
        this.form.newPassword !== '' &&
        this.form.newPasswordConfirmation !== null &&
        this.form.newPasswordConfirmation !== ''
      ) {
        if (this.form.newPassword === this.form.newPasswordConfirmation) {
          authService.changePassword(this.form.newPassword, this.form.newPasswordConfirmation)
            .then((response) => {
              if (response !== null && response.statusCode.code === parseInt(process.env.VUE_APP_STATUS_SAVE_SUCCESS)) {
                swal('Kata sandi berhasil di ubah')
              } else {
                swal('Kata sandi gagal di ubah')
              }
            })
        } else {
          swal('Kata sandi tidak sama')
        }
      } else {
        swal('Harap mengisi kata sandi baru')
      }
    }
  }
}
</script>
