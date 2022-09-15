import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {BootstrapVueIcons} from "bootstrap-vue";

Vue.config.productionTip = false
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
