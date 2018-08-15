import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import User from '@/components/User'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: App
    },
    {
      path: '/home/user/:id/color/:color',
      name: 'User',
      component: User,
    },
    {
      path: '/home/user/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
