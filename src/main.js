import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import {BootstrapVueIcons} from "bootstrap-vue";
import axios from "axios";
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(BootstrapVueIcons, axios, VueAxios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
