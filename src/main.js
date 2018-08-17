// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import filterApp from './filters/AppFilter'
import BootstrapVue from 'bootstrap-vue';
// import VueLocalStorage from 'vue-localstorage';
import VueI18n from 'vue-i18n';

Vue.use(BootstrapVue)

Vue.use(VueI18n)


// Vue.use(VueLocalStorage)

Vue.config.productionTip = false

Vue.component('input-one', {
  data() {
    return {
      numberOne: 0
    }
  },
  watch: {
    numberOne() {
      this.$store.commit('showNumberOne', this.numberOne)
      /*console.log(this.$store.state.numberOne);*/
    }
  },
  template: '<div><input type="number" v-model.number="numberOne"/></div>'
});


Vue.component('input-two', {
  data() {
    return {
      numberTwo: 0
    }
  },
  watch: {
    numberTwo(n) {
      console.log(typeof n)
      this.$store.commit('showNumberTwo', this.numberTwo)
    }
  },
  template: '<div><input type="number" v-model.number="numberTwo"/></div>'
});

/*
Vue.filter('filterApp',
  (value) => {
    value = parseFloat(value);
    return value.toFixed(2)
  });
*/


Vue.component('result', {
  data() {
    return {
      result: 0,
      bool: false
    }
  },
  watch: {
    bool(n, old) {
      if (n) {
        setTimeout(() => {
          this.bool = false
        }, 1000)
      }
      // this.bool = !this.bool;
    }
  },
  computed: {
    resultAll() {
      let result = this.$store.state.numberOne + this.$store.state.numberTwo;
      this.$store.commit('showResult', result)
      this.bool = true
      return result
    }
  },
  template: '<div class="result"><p class="animated" :class="{tada: bool}">= {{resultAll}}</p>' +
  '</div>'
})


const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

export const i18n = new VueI18n({
  locale: 'ja',
  messages
})

const _ = require('lodash')


Vue.component('anchored-heading', {
  data() {
    return {
      blogTitle: 'Title',
      props: {
        level: {
          type: Number,
          required: true
        }
      }
    }
  },
  render(createElement) {
    return createElement('h1', this.blogTitle)
  }
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  // localStorage: {
  //   paths: [
  //     {
  //       type: Object
  //     }
  //   ]
  // },
  // filters: {filterApp},
  components: {App},
  data() {
    return {
      blogTitle: 'Title'
    }
  },
  template: '<App/>'
  /*render(createElement) {
    return createElement('h1', this.blogTitle)
  }*/
})
