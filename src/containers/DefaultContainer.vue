<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile/>
      <b-link class="navbar-brand" to="/">
        <img class="navbar-brand-full" src="../assets/img/logoIcon.png" width="110" height="30" alt="AirSale Logo">
        <img class="navbar-brand-minimized" src="../assets/img/logo.png" style="margin: 10px 10px 10px 10px" height="40" width="50" alt="AirSale Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg"/>
      <b-navbar-nav class="d-md-down-none">
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
        </b-nav-item>
        <HeaderProfile/>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item class="d-md-down-none">
        </b-nav-item>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">

      <!--SideBar Menu Samping-->
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="menu"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>

      <!--Main Menu-->
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view/>
        </div>
      </main>

    </div>

    <!--footer-->
    <TheFooter>
      <div>
<!--        <span class="ml-1">&copy; 2020 cmsnesia.</span>-->
      </div>
      <div class="ml-auto">
        <span class="ml-1">&copy; 2020 cmsnesia.</span>
<!--        <span class="mr-1">Created by</span>-->
<!--        <a href="https://www.cmsnesia.com" target="_blank"><i>elvan & pawit</i></a>-->
      </div>
    </TheFooter>
  </div>
</template>

<script>
import menu from '../router/menu'
import HeaderProfile from './HeaderProfile'
import {
  Header as AppHeader,
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Breadcrumb,
  Footer as TheFooter } from '@coreui/vue'

export default {
  name: 'DefaultContainer',
  components: {
    AppHeader,
    AppSidebar,
    TheFooter,
    Breadcrumb,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
    HeaderProfile
  },
  data () {
    return {
      menu: menu.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    }
  }
}
</script>

<style scoped>

</style>
