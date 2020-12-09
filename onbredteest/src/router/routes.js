
const routes = [
  // {
  //   path: '/AdminPage',
  //   component: () => import('pages/orders.vue'),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/Admin',
  //   component: () => import('pages/AdminLogin.vue')
  // },
  // {
  //   path: '/',
  //   component: () => import('pages/orders.vue')
  // }
  {
    path: '/',
    component: () => import('pages/deliver.vue')
  }
]

export default routes
