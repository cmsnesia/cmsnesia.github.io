import Vue from 'vue'
import VueRouter from 'vue-router'
// import storage from '../commons/config/storage.config'

import Page404 from '../views/Page404'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import DefaultContainer from '../containers/DefaultContainer'

// Post
import Published from '../views/posts/Published'
import Drafts from '../views/posts/Drafts'
import Groups from '../views/posts/Groups'
import Editor from '../views/posts/Editor'
import PageEditor from '../views/pages/Editor'

// Categories
import Categories from '../views/categories/Categories'

// Menus
import Menus from '../views/menus/Menus'

// Pages
import Pages from '../views/pages/Pages'

// Profile
import Profile from '../views/settings/Profile'
import User from '../views/settings/User'

import storage from '../commons/config/storage.config'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      redirect: 'posts/published'
    },
    {
      path: '/posts',
      component: DefaultContainer,
      children: [
        {
          path: 'published',
          name: 'Published',
          component: Published
        },
        {
          path: 'drafts',
          name: 'Drafts',
          component: Drafts
        },
        {
          path: 'groups',
          name: 'Groups',
          component: Groups
        },
        {
          path: 'editor/:id',
          name: 'Editor',
          component: Editor
        },
        {
          path: 'pageEditor/:id',
          name: 'Page Editor',
          component: PageEditor
        }
      ]
    },
    {
      path: '/pages',
      component: DefaultContainer,
      children: [
        {
          path: '/',
          name: 'Pages',
          component: Pages
        }
      ]
    },
    {
      path: '/categories',
      component: DefaultContainer,
      children: [
        {
          path: '/',
          name: 'Categories',
          component: Categories
        }
      ]
    },
    {
      path: '/menus',
      component: DefaultContainer,
      children: [
        {
          path: '/',
          name: 'Menus',
          component: Menus
        }
      ]
    },
    {
      path: '/settings',
      component: DefaultContainer,
      children: [
        {
          path: 'user',
          name: 'User',
          component: User
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      name: 'Page 404',
      component: Page404
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (storage.getAccessToken() === null || storage.getAccessToken() === '') {
      return next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router
