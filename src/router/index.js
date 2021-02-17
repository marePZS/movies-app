import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../views/AppMovies.vue'
import AddMovie from '../views/AddMovie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/movies"
  },
  {
    path: '/movies',
    name: 'AppMovies',
    component: AppMovies
  },
  {
    path: '/addmovie',
    name: 'AddMovie',
    component: AddMovie
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
