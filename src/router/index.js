import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import User from '@/components/User'
import UserPath from '../components/UserPath'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/user/:userID',
      name: 'user',
      component: User,
      /*beforeUpdate: (to ,from, next) => {
        // if(to.params.userID) {
          console.log(to, 'fsdsdffdssfd')
          console.log(from, 'fsdsdffdssfd')
        localStorage.setItem('paths', to.fullPath)
        // }
        next( )
      },
      beforeLeave: (to, from, next) => {
        console.log(to, from)
        localStorage.setItem('paths', to.fullPath)
        next()
      },*/
      children: [
        {
          path: 'next',
          name: 'path',
          component: UserPath
        }
      ],
    },

    /* {
       path: '/home/user/:id/color/:color',
       name: 'User',
       component: User,
     },
     {
       path: '/home/',
       name: 'User',
       component: User,
     },
     {
       path: '/home/user/hello',
       name: 'HelloWorld',
       component: HelloWorld
     }*/
  ]
});

router.afterEach((to, from) => {
  let arr = JSON.parse(localStorage.getItem('paths'))
  console.log(arr)
  let path = {
    id: to.params.userID,
    path: to.path
  };
  console.log(path);
  arr.push(path);
  localStorage.setItem('paths', JSON.stringify(arr));
});
