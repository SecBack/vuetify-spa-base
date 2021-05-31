import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = process.env.baseURL

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    clearUserData () {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    login ({ commit }, credentials) {
      return axios
        .post('/login', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    },
    logout ({ commit }) {
      return axios
        .post('/logout', this.state.user)
        .then(() => {
          commit('clearUserData')
        })
    },
    register (user) {
      console.log('register', user)
      return axios
        .post('/register', user)
        .then((response) => {
          console.log(response)
        })

    }
  },
  getters : {
    isLogged: state => !!state.user
  }
})

export default store