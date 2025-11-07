import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProgramPage from '../views/ProgramPage.vue'
import GalleryPage from '../views/GalleryPage.vue'
import NewsBlogPage from '../views/News&BlogPage.vue'

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
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage
  },
  {
    path: '/blog',
    name: 'News',
    component: NewsBlogPage
  },
  // you can add more pages later like Donate, Volunteer, Contact
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
