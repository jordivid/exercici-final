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
    path: '/albums',
    name: 'Albums',
    component: function () {
      return import(/* webpackChunkName: "albums" */ '../views/Albums.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
