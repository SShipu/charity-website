<template>
  <section class="flat-row flat-recent-causes">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 title-section">
          <h4>We Are Fighting For</h4>
          <h2><span>Recent</span> Causes</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 recent-causes">
          <div class="post" v-for="(cause, index) in causes" :key="index">
            <div class="wrap-post">
              <div class="img-recent-causes">
                <router-link :to="cause.link"><img :src="cause.image" alt="cause" /></router-link>
              </div>
              <div class="post-recent-causes">
                <h6 class="title-post"><router-link :to="cause.link">{{ cause.title }}</router-link></h6>
              </div>
              <div class="donation-amount">
                <div class="donation-v1"><p>{{ cause.donated | currency }}</p><span>/</span></div>
                <div class="donation-v2"><p>{{ cause.goal | currency }}</p></div>
              </div>
              <div class="flat-progress">
                <div class="perc">{{ cause.progress }}%</div>
                <div class="progress-bar" :data-percent="cause.progress">
                  <div class="progress-animate"></div>
                </div>
              </div>
              <div class="more"><router-link :to="cause.link">Donate Now</router-link></div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-button style-v1">
        <router-link to="/causes" class="flat-button button-style">View More</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const causes = [
  { title: 'Save life of small boys in prison', image: '@/assets/cause-3.jpg', donated: 1333555, goal: 2000000, progress: 89, link: '/donate' },
  { title: 'Make a nice school for orphans', image: '@/assets/cause-4.jpg', donated: 3543116, goal: 5000000, progress: 89, link: '/donate' },
  { title: 'Help boys find their lost sister', image: '@/assets/cause-5.jpg', donated: 4813735, goal: 7000000, progress: 89, link: '/donate' },
]

// Optional filter for currency formatting
import { ref } from 'vue'
const currency = (value) => `$${value.toLocaleString()}`
</script>
