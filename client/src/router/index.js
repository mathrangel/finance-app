import { createRouter, createWebHistory } from "vue-router";  

import Home from '../pages/Views/view_initial.vue'
import ViewDefault from '../pages/Views/view_default.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'ViewDefault',
    component: ViewDefault
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router