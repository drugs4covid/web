import Vue from 'vue'
import axios from "axios";
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(axios, VueAxios)

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
