import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/TareaView.vue')
  },
  {
    path: '/tareas/:id',
    name: 'verTarea',
    component: () => import(/* webpackChunkName: "verTarea" */ '../views/VerTareaView.vue')
  },
  {
    path: '/tareas/:id/editar',
    name: 'editarTarea',
    component: () => import(/* webpackChunkName: "verTarea" */ '../views/EditarTareaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
