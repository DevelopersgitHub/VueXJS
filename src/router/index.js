import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    /*{
      path: '/user/:name',
      name: 'user',
      component: User,
    }*/
  ],
});
    /*{
      path: '/user/:userID',
      name: 'user',
      component: User,
      /!*beforeUpdate: (to ,from, next) => {
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
      },*!/
      children: [
        {
          path: 'next',
          name: 'path',
          component: UserPath,
          meta: 'requestAuth'
        }
      ],
    },

    /!* {
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
     }*!/
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
});*/
/*

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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requestAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next();
  }
})
*/
