<template>
  <header id="header" class="header clearfix"> 
        <div class="header-wrap clearfix">
            <div id="logo" class="logo">
                <a href="index.html" rel="home">
                    <img src="/images/logo.png" alt="image">
                </a>
            </div><!-- /.logo -->            
            <div class="nav-wrap">
                <div class="btn-menu">
                    <span></span>
                </div><!-- //mobile menu button -->
                <nav id="mainnav" class="mainnav">
                    <ul class="menu"> 
                        <li class="home has-sub">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="has-sub"><a href="about.html">About</a>
                        </li> 

                        <li><a href="programs.html">Programs</a>
                        </li>

                        <li><a href="causes.html">Causes</a>              
                        </li>

                        <li class="has-sub"><a href="gallery.html">Gallery</a>   
                        </li>

                        <li><a href="blog.html">News</a>
                            <ul class="submenu"> 
                                <li><a href="blog-single.html">Blog Single</a></li> 
                            </ul><!-- /.submenu --> 
                        </li>

                        <li><a href="contact.html">Contact</a>
                        </li>
                    </ul><!-- /.menu -->
                </nav><!-- /.mainnav -->    
            </div><!-- /.nav-wrap -->

            <div class="flat-information">
                <ul class="flat-socials">
                    <li class="facebook">
                        <a href="index-v2.html#">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li class="twitter">
                        <a href="index-v2.html#">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li class="google">
                        <a href="index-v2.html#">
                            <i class="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li class="linkedin">
                        <a href="index-v2.html#">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="dribbble">
                        <a href="index-v2.html#">
                            <i class="fa fa-dribbble"></i>
                        </a>
                    </li>
                </ul>

                <div id ="s" class="search-box show-search">
                    <a href="index-v2.html#search" class="flat-search"><i class="fa fa-search"></i></a> 
                    <div class="submenu top-search">
                        <div class="widget widget_search">
                            <form class="search-form">
                                <input type="search" class="search-field" placeholder="Search …">
                                <input type="submit" class="search-submit">
                            </form>
                        </div>
                    </div>        
                </div><!-- /.show-search -->
            </div>
        </div><!-- /.header-inner --> 
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
