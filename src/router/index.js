import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProgramPage from '../views/ProgramPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/program',
    name: 'Program',
    component: ProgramPage
  },
  // you can add more pages later like Donate, Volunteer, Contact
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
