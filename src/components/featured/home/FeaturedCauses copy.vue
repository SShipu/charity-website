<template>
  <section class="flat-row flat-featured-causes no-padding py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="fw-bold">Featured Causes</h2>
        <p class="text-muted">Your contribution makes a difference</p>
      </div>

      <Carousel
        :items-to-show="3"
        :wrap-around="true"
        :autoplay="3000"
        :pause-autoplay-on-hover="true"
        class="featured-causes"
        :breakpoints="breakpoints"
      >
        <Slide v-for="(cause, index) in causes" :key="index">
          <div class="item px-3">
            <div class="causes-img style1 position-relative">
              <img
                :src="cause.image"
                :alt="cause.title"
                class="img-fluid w-100 rounded"
              />
              <div class="overlay position-absolute top-0 start-0 w-100 h-100"></div>
            </div>

            <div class="causes-post style1 mt-3 text-center">
              <div class="title-education">
                <p class="text-uppercase fw-semibold text-success mb-1">
                  {{ cause.category }}
                </p>
              </div>
              <h4 class="title-post mb-3">
                <a href="#" class="text-dark text-decoration-none">
                  {{ cause.title }}
                </a>
              </h4>

              <div class="donation-amount d-flex justify-content-center align-items-center mb-2">
                <div class="donation-v1 me-1">
                  <p class="fw-bold">{{ cause.raised }}</p><span>/</span>
                </div>
                <div class="donation-v2">
                  <p>{{ cause.goal }}</p>
                </div>
              </div>

              <div class="flat-progress position-relative mb-3">
                <div class="perc position-absolute top-0 end-0 small text-muted">
                  {{ cause.percent }}%
                </div>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: cause.percent + '%' }"
                    :aria-valuenow="cause.percent"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="more">
                <a href="#" class="btn btn-success btn-sm">Donate Now</a>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel';

const causes = [
  {
    category: 'Education',
    title: 'Education for all Children',
    image: '/images/about/index-2/1.jpg',
    raised: '$3,732,534',
    goal: '$5,000,000',
    percent: 89,
  },
  {
    category: 'Health',
    title: 'Polio Vaccine For Children in NY',
    image: '/images/about/index-2/2.jpg',
    raised: '$2,630,982',
    goal: '$3,000,000',
    percent: 88,
  },
  {
    category: 'Wildlife',
    title: 'Defend Endangered Animals',
    image: '/images/about/index-2/3.jpg',
    raised: '$6,239,926',
    goal: '$7,000,000',
    percent: 89,
  },
  {
    category: 'Environment',
    title: 'Clean Water for All',
    image: '/images/about/index-2/4.jpg',
    raised: '$4,120,700',
    goal: '$5,000,000',
    percent: 82,
  },
];

const breakpoints = {
  1024: { itemsToShow: 3 },
  768: { itemsToShow: 2 },
  480: { itemsToShow: 1 },
};
</script>

<style scoped>
.flat-featured-causes {
  background-color: #fff;
}
.flat-causes .overlay {
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
}
.item:hover .overlay {
  background-color: rgba(0, 0, 0, 0.1);
}
.progress {
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar {
  background-color: #17b26a;
  transition: width 0.4s ease;
}
</style>
