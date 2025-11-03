<template>
  <section class="hero-section position-relative" >
    <Carousel
      :items-to-show="1"
      :wrap-around="true"
      :autoplay="3000"
      :mouse-drag="true"
      :pause-autoplay-on-hover="true"
      class="position-relative"
    >
      <Slide v-for="(item, i) in slides" :key="i">
        <div class="slide-item position-relative">
          <img :src="item.image" class="w-100" alt="slide-image" />
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <div class="slide-content position-absolute top-50 start-0 translate-middle-y ps-5 text-white">
            <h2 v-html="item.title" class="display-5 fw-bold mb-3"></h2>
            <p v-if="item.description" v-html="item.description" class="lead mb-4"></p>
            <a href="#" class="btn btn-outline-light btn-lg">Learn More</a>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const slides = [
  {
    image: '/images/slides/2.jpg',
    title: 'Every problem has <br> a great <span class="text-warning">Solution</span>',
    description:
      'Consectetur ed do eiusmod tempor incid idunLorem ipsum dolor sit amet, con <br>sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis',
  },
  {
    image: '/images/slides/1.jpg',
    title: 'No one has become <br> poor from <span class="text-warning">Giving</span>',
  },
  {
    image: '/images/slides/3.jpg',
    title: 'We stand for<br><span class="text-warning">Greatest</span> Causes',
    description: 'Kotota kangal hoye thaki bujhle na kokhono',
  },
  {
    image: '/images/slides/5.jpg',
    title: '<span class="text-warning">Childrens</span> are Gods <br><span class="text-warning">Best</span> Creation',
  },
  {
    image: '/images/slides/4.jpg',
    title: 'The best use of your <br> money is <span class="text-warning">Giving</span>',
  },
]
</script>

<style scoped>
.hero-section {
  overflow: hidden;
  position: relative;
  max-height: 798px;
}

.slide-item {
  position: relative;
}

.overlay {
  z-index: 1;
}

.slide-content {
  max-width: 700px;
  z-index: 2;
}
</style>
