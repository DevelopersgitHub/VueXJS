import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js.cookie'
import {routes} from './routes'

Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes: routes
}

export const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  if (!Cookie.get('token')) {
    if (to.name !== 'login') {
      next({
        name: 'Login'
      })
    } else {
      next('gdgd')
    }
  } else {
    if (to.name === 'login') {
      next()
    }
    else {
      next()
    }
  }
})
