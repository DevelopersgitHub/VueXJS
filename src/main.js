// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue';
import util from '@/components/login/settings'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

//
// Vue.directive('text', {
//     inserted: el => el.focus()
//   }
// )


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created() {
    util.checkUpdate()
  },
  components: {App},
  template: '<App/>'
});
