<template>
  <section class="flat-row flat-featured-causes no-padding">
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="flat-causes">
            <div class="text-left mb-3">
              <p>Featured Causes</p>
            </div> -->
            <div class="container">
    <div class="row justify-center">
      <div class="col-md-10">
        <div class="flat-causes text-center position-relative">
          <div class="text-left mb-3 z-3">
            <p>Featured Causes</p>
          </div>

            <Carousel
              :items-to-show="3"
              :wrap-around="true"
              :autoplay="false"
              class="featured-causes"
            >
              <Slide v-for="(cause, index) in causes" :key="index">
                <div class="item">
                  <div class="causes-img style1">
                    <img :src="cause.image" :alt="cause.title" />
                    <div class="overlay"></div>
                  </div>

                  <div class="causes-post style1">
                    <div class="title-education">
                      <p>{{ cause.category }}</p>
                    </div>

                    <h4 class="title-post px-1">
                      <a href="#">{{ cause.title }}</a>
                    </h4>

                    <div class="donation-amount mb-0">
                      <div class="donation-v1">
                        <p class="m-0">{{ cause.raised }}</p><span>/</span>
                      </div>
                      <div class="donation-v2">
                        <p>{{ cause.goal }}</p>
                      </div>
                    </div>

                    <div class="flat-progress">
                      <div class="perc">{{ cause.percent }}%</div>
                      <div class="progress-bar">
                        <div
                          class="progress-animate"
                          :style="{ width: cause.percent + '%' }"
                        ></div>
                      </div>
                    </div>

                    <div class="more mt-2">
                      <a href="#">Donate Now</a>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <!-- <Navigation />  -->
                <Pagination />  
            </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const causes = [
  {
    image: '/images/about/index-2/1.jpg',
    category: 'Education',
    title: 'Education for all Children',
    raised: '$3,732,534',
    goal: '$5,000,000',
    percent: 89
  },
  {
    image: '/images/about/index-2/2.jpg',
    category: 'Health',
    title: 'Polio Vaccine For Children in NY',
    raised: '$2,630,982',
    goal: '$3,000,000',
    percent: 89
  },
  {
    image: '/images/about/index-2/3.jpg',
    category: 'Wildlife',
    title: 'Defend Endangered Animals',
    raised: '$6,239,926',
    goal: '$7,000,000',
    percent: 89
  }
]
</script>

<style scoped>
.flat-featured-causes {
  padding: 60px 0;
}

.causes-img {
  position: relative;
}
.causes-img img {
  width: 100%;
  border-radius: 0px;
}
.causes-img .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0px;
}

.causes-post {
  text-align: center;
  margin-top: 15px;
}

.flat-progress {
  position: relative;
  /* background: #eee; */
  height: 4px;
  border-radius: 4px;
  margin: 10px 0;
}

.progress-animate {
  background: #17b26a;
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease;
}

.perc {
  font-size: 13px;
  margin-bottom: 5px;
  text-align: right;
}

.more a {
  display: inline-block;
  padding: 6px 16px;
  /* background: #17b26a; */
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
}

.more a:hover {
  background: #128a53;
}

.row.justify-center {
  display: flex;
  justify-content: center;
}

</style>
<style>
/** CAROUSEL DOTS DESIGN */









/* Pagination container */
.carousel__pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
  bottom: -10%;
}

/* Each pagination item (button) */
.carousel__pagination-button {
  width: 16px;
  height: 16px;
/* //   border-radius: 50%; */
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;
}

/* Inner dot like <span> */
.carousel__pagination-button::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
/* //   border-radius: 50%; */
  position: absolute;
  top: 3px;
  left: 3px;
  transition: all 0.3s ease;
}

/* Active dot styling */
.carousel__pagination-button--active {
  border: 1px solid #ffd71a; /* Yellow border for active dot */
}

.carousel__pagination-button--active::before {
  background-color: #ffd71a; /* Active dot color */
  transform: scale(1.2);
}

/* Optional hover effect */
.carousel__pagination-button:hover::before {
  background-color: #ffd71a;
}

/* Responsive tweak */
@media (max-width: 576px) {
  .carousel__pagination-button {
    width: 12px;
    height: 12px;
  }
  .carousel__pagination-button::before {
    width: 8px;
    height: 8px;
    top: 2px;
    left: 2px;
  }
}

</style>
