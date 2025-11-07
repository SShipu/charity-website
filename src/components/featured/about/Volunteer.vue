<template>
  <section class="flat-row flat-member">
    <div class="container">
      <!-- Section Title -->
      <div class="row justify-center">
        <div class="col-md-8 col-md-offset-2 text-center">
          <div class="title-section">
            <h4>{{ subtitle }}</h4>
            <h2><span>{{ highlightedTitle }}</span> {{ title }}</h2>
          </div>
        </div>
      </div>

      <!-- Carousel -->
      <div class="row">
        <Carousel
          :items-to-show="4"
          :wrap-around="false"
          :autoplay="false"
          :pause-autoplay-on-hover="false"
          class="flat-member-carousel"
        >
          <Slide
            v-for="(volunteer, index) in volunteers"
            :key="index"
            class="cs-module-4"
          >
            <div class="item position-relative" style="width: 90%;">
              <div class="overlay"></div>
              <img :src="volunteer.image" alt="volunteer image" class="w-100" style="z-index: 9; position: relative;" />
            </div>

            <div class="demo text-center p-3" style="padding: 1.5rem !important">
              <div class="cs-post">
                <div class="cs-post-header">
                  <h6 class="name">
                    <a href="#" class="text-black no-underline">
                      {{ volunteer.name }}
                    </a>
                  </h6>
                  <span class="position">{{ volunteer.position }}</span>
                </div>

                <div class="cs-post-footer mt-2">
                  <div class="cs-footer-share">
                    <a
                      v-for="(social, sIndex) in volunteer.socials"
                      :key="sIndex"
                      :href="social.link"
                      target="_blank"
                      class="mx-1"
                    >
                      <i :class="social.icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <!-- Custom Pagination -->
          <template #addons>
            <!-- <Pagination /> -->
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// Section title
const subtitle = ref('Working to save world')
const highlightedTitle = ref('Our')
const title = ref('Volunteers')

// Volunteer data
const volunteers = ref([
  {
    name: 'Juwel Khan',
    position: 'Student',
    image: '/images/member/1.jpg',
    socials: [
      { icon: 'fa fa-facebook', link: '#' },
      { icon: 'fa fa-twitter', link: '#' },
      { icon: 'fa fa-google-plus', link: '#' }
    ]
  },
  {
    name: 'Binika Sharma',
    position: 'Student',
    image: '/images/member/2.jpg',
    socials: [
      { icon: 'fa fa-facebook', link: '#' },
      { icon: 'fa fa-twitter', link: '#' },
      { icon: 'fa fa-google-plus', link: '#' }
    ]
  },
  {
    name: 'Akbar Hossain',
    position: 'Student',
    image: '/images/member/3.jpg',
    socials: [
      { icon: 'fa fa-facebook', link: '#' },
      { icon: 'fa fa-twitter', link: '#' },
      { icon: 'fa fa-google-plus', link: '#' }
    ]
  },
  {
    name: 'Minhaz Abedin',
    position: 'Student',
    image: '/images/member/4.jpg',
    socials: [
      { icon: 'fa fa-facebook', link: '#' },
      { icon: 'fa fa-twitter', link: '#' },
      { icon: 'fa fa-google-plus', link: '#' }
    ]
  }
])
</script>

<style scoped>
.text-black {
  color: #000 !important;
}
.no-underline {
  text-decoration: none !important;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 6px;
}
.cs-footer-share {
  padding-left: 0 !important;
}
.cs-footer-share a i {
  color: #333;
  transition: color 0.3s;
}
.cs-footer-share a:hover i {
  color: #ffd71a;
}
.cs-module-4 img {
  border-radius: 6px;
  object-fit: cover;
}
.title-section h4 {
  color: #777;
}
.title-section h2 span {
  color: #ffd71a;
}
</style>
