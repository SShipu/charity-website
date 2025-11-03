import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // you can add more pages later like About, Donate, Volunteer, Contact
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
