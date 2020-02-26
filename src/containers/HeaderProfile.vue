<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="../assets/img/avatar.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com"/>
    </template>
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Akun</strong></b-dropdown-header>
      <b-dropdown-item @click="profile"><i class="fa fa-user"/>Profil</b-dropdown-item>
      <b-dropdown-item @click="openChangePasswordModal"><i class="fa fa-asterisk"/>Ubah kata sandi</b-dropdown-item>
      <b-dropdown-item @click="logout"><i class="fa fa-lock"/>Keluar</b-dropdown-item>
    </template>
    <template>
      <b-modal ref="openChangePasswordModal" title="Ubah kata sandi">
        <div class="form-row">
          <div class="col-12">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <div class="form-group">
                <label>Password baru</label>
                <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
                  <input type="password" class="form-control" v-model="newPassword" required>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <br/>
                <label>Marukan ulang password baru</label>
                <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
                  <input type="password" class="form-control" v-model="verifyPassword" required>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </ValidationObserver>
          </div>
        </div>
        <div slot="modal-footer">
            <button type="submit" class="btn btn-primary" @click="doSaveNewPassword" >Simpan</button>
        </div>
      </b-modal>
    </template>
  </AppHeaderDropdown>
</template>
<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import AuthService from '../service/AuthService'

const authService = AuthService.build()

export default {
  name: 'HeaderProfile',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      newPassword: '',
      verifyPassword: ''
    }
  },
  methods: {
    logout () {
      authService.logout()
      this.$router.replace('/login')
    },
    profile () {
      alert('Profile')
    },
    openChangePasswordModal () {
    },
    async doSaveNewPassword () {

    }
  }
}
</script>
