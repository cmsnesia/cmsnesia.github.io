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
      <b-dropdown-item @click="changePassword"><i class="fa fa-asterisk"/>Ubah kata sandi</b-dropdown-item>
      <b-dropdown-item @click="logout"><i class="fa fa-lock"/>Keluar</b-dropdown-item>
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
      this.$router.push({ path: '/settings/profile' })
    },
    changePassword () {
      this.$router.push({ path: '/settings/user' })
    }
  }
}
</script>
