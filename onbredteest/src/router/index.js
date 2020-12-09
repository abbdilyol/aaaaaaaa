import Vue from 'vue'
import VueRouter from 'vue-router'
import firebaseService from '../services/firebase'
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async (to, from, next) => {
    const { ensureAuthIsInitialized, isAuthenticated } = firebaseService
    try {
      // Force the app to wait until Firebase has
      // finished its initialization, and handle the
      // authentication state of the user properly

      await ensureAuthIsInitialized(store)

      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (isAuthenticated(store)) {
          next()
        } else {
          next('/')
        }
      } else {
        next()
      }
    } catch (err) {
      console.log(err)
    }
  })

  return Router
}
