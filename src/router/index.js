import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/login.vue'
import login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
  ]
})

export default router
