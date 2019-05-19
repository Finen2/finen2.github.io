import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false
Vue.config.devtools = true;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
