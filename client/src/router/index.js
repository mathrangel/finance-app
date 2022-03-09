import { createRouter, createWebHistory } from "vue-router";  

import Home from '../pages/Views/view_initial.vue'
import Register from '../components/Modal/modal_register.vue'
import Login from '../components/Modal/modal_login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createaccount',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router