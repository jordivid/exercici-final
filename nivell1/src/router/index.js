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
    path: '/pictures',
    name: 'Pictures',
    component: function () {
      return import(/* webpackChunkName: "pictures" */ '../views/Pictures.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
