import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios';
import store from './store';

import buefy from './plugins/buefy';


Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  buefy,
  render: h => h(App)
}).$mount('#app')
