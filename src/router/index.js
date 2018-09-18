import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/app',
      name: 'App',
      // redirect: () => import('../components/Main/SideBar')
    },
    {
      path: '/date',
      name: 'Moment',
      component: () => import('../components/Date')
    }
  ]
});
