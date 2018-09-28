export const routes = [
  {
    path: '/app',
    name: 'App',
    // redirect: () => import('../components/OldComponents/SideBar')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login/Login')
  },
  {
    path: '/users_table',
    name: 'Table',
    component: () => import('../components/OldComponents/UsersTable')
  },
  {
    path: '/date',
    name: 'Moment',
    component: () => import('../components/OldComponents/Date')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../components/OldComponents/Product')
  },
  {
    path: '/403',
    name: 'Page 403',
    component: () => import('../components/login/Page403')
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('../components/login/Images')
  }
];
