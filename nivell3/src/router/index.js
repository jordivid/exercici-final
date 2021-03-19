import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: function () {
      return import(/* webpackChunkName: "users" */ '../views/Users.vue')
    }
  },
  {
    path: '/userdetails/:idUser',
    name: 'UserDetails',
    component: function () {
      return import(/* webpackChunkName: "users" */ '../views/UserDetails.vue')
    }
  },
  {
    path: '/changeUser/:idUser',
    name: 'ChangeUser',
    component: function () {
      return import(/* webpackChunkName: "users" */ '../views/ChangeUser.vue')
    }
  },
  {
    path: '/albums',
    name: 'Albums',
    component: function () {
      return import(/* webpackChunkName: "albums" */ '../views/Albums.vue')
    }
  },
  {
    path: '/albumdetails/:idAlbum',
    name: 'AlbumDetails',
    component: function () {
      return import(/* webpackChunkName: "users" */ '../views/AlbumDetails.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
