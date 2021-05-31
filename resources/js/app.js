import Vue from 'vue'
import router from './router'
import store from './Store/index'
import axios from 'axios'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

export default new Vuetify({})

new Vue({
    router,
    store,
    created () {
        const userInfo = localStorage.getItem('user')
        if (userInfo) {
            const userData = JSON.parse(userInfo)
            this.$store.commit('setUserData', userData)
        }
        axios.interceptors.response.use(
          response => response,
          error => {
              if (error.response.status === 401) {
                  this.$store.dispatch('logout')
              }
              return Promise.reject(error)
          }
        )
    },
    vuetify: new Vuetify(),
    el: '#app',
    render: h => h(App),
});