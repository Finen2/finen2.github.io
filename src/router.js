import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./about/About.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('./collection/LogedOut.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./collection/LogedIn.vue')
    },
    {
      path: '/watches',
      name: 'watches',
      component: () => import('./watches/Watches.vue')
    }
  ]
})
