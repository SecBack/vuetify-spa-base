import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

import Welcome from '../views/Welcome.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  }, {
    path: '/register',
    name: 'register',
    component: Register,
  },

  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  }, {
    path: '/test',
    name: 'test',
    component: Test,
    meta: { auth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
