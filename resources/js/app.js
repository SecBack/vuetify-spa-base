import Vue from 'vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

export default new Vuetify({})

new Vue({
  router,
  vuetify: new Vuetify(),
  el: '#app',
  render: h => h(App),
});
