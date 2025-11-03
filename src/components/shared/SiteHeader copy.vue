<template>
  <header id="header" class="bg-white shadow-sm py-2">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/images/logo.png" alt="logo" class="me-2" height="50" />
      </router-link>

      <!-- Mobile toggle -->
      <button
        class="navbar-toggler border-0"
        type="button"
        @click="isNavOpen = !isNavOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation -->
      <nav
        class="navbar navbar-expand-lg"
        :class="{ show: isNavOpen }"
      >
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item dropdown" v-for="(item, index) in menu" :key="index">
            <router-link
              v-if="!item.submenu"
              class="nav-link"
              :to="item.link"
              >{{ item.label }}</router-link
            >
            <div v-else class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                >{{ item.label }}</a
              >
              <ul class="dropdown-menu">
                <li
                  v-for="(sub, idx) in item.submenu"
                  :key="idx"
                >
                  <router-link class="dropdown-item" :to="sub.link">{{ sub.label }}</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Socials & Search -->
      <div class="d-none d-lg-flex align-items-center ms-3">
        <ul class="list-inline mb-0 me-3">
          <li v-for="(social, i) in socials" :key="i" class="list-inline-item">
            <a :href="social.link" target="_blank" class="text-dark fs-5">
              <i :class="`fa fa-${social.icon}`"></i>
            </a>
          </li>
        </ul>

        <!-- Search box -->
        <div class="position-relative">
          <button
            class="btn btn-outline-secondary rounded-circle"
            @click="toggleSearch"
          >
            <i class="fa fa-search"></i>
          </button>

          <transition name="fade">
            <div
              v-if="showSearch"
              class="position-absolute top-100 end-0 mt-2 bg-white shadow-sm p-2 rounded"
              style="width: 250px"
            >
              <input
                type="text"
                v-model="searchQuery"
                class="form-control"
                placeholder="Search..."
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// navigation menu
const isNavOpen = ref(false)
const showSearch = ref(false)
const searchQuery = ref('')

const toggleSearch = () => {
  showSearch.value = !showSearch.value
}

const menu = [
  {
    label: 'Home',
    link: '/',
    submenu: [
      { label: 'Home 1', link: '/' },
      { label: 'Home 2', link: '/home2' },
      { label: 'Home 3', link: '/home3' },
      { label: 'Home 4', link: '/home4' },
      { label: 'Home 5', link: '/home5' },
    ],
  },
  { label: 'About', link: '/about' },
  { label: 'Programs', link: '/programs' },
  { label: 'Causes', link: '/causes' },
  { label: 'Gallery', link: '/gallery' },
  {
    label: 'News',
    link: '/news',
    submenu: [{ label: 'Blog Single', link: '/blog-single' }],
  },
  { label: 'Contact', link: '/contact' },
]

const socials = [
  { icon: 'facebook', link: '#' },
  { icon: 'twitter', link: '#' },
  { icon: 'google-plus', link: '#' },
  { icon: 'linkedin', link: '#' },
  { icon: 'dribbble', link: '#' },
]
</script>

<style scoped>
.navbar-toggler {
  background-color: transparent;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 25px;
  height: 2px;
  background-color: #000;
  position: relative;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: "";
  width: 25px;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
}

.navbar-toggler-icon::before {
  top: -7px;
}

.navbar-toggler-icon::after {
  top: 7px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
