import Vue from 'vue'
import VueRouter from 'vue-router'

import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

import Welcome from '../views/Welcome.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    }, {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },


    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
  ],
})
