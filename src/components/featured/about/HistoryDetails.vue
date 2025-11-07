<template>
  <section class="flat-row flat-support-us no-padding-bottom">
    <div class="container">
      <div class="row justify-center">
        <!-- Left Column -->
        <div class="col-md-6">
          <div class="flat-support">
            <div class="support-wrapper mb-4">
              <h4 class="title-post">
                <a href="#" class="text-black no-underline">We Need Your Help</a>
              </h4>
              <p>
                Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure ugiat nulla pariatur.
              </p>
            </div>

            <!-- Support Icon Grid -->
            <div class="row">
              <div
                v-for="(item, index) in supportItems"
                :key="index"
                class="col-md-6 mb-4"
              >
                <div class="support-icon">
                  <div class="icon">
                    <i :class="item.icon"></i>
                    <h6 class="title-post">
                      <a href="#" class="text-black no-underline">{{ item.title }}</a>
                    </h6>
                  </div>
                  <div class="icon-post-v1">
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column (Image) -->
        <div class="col-md-6">
          <div class="container-fluid">
            <div class="img-wrapper">
              <img :src="image" alt="Support Image" class="img-responsive w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Main image (dynamic)
const image = ref('/images/member/6.jpg')

// Support items
const supportItems = ref([
  {
    icon: 'icon-present',
    title: 'Donate Our Causes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
  },
  {
    icon: 'icon-people',
    title: 'Become A Volunteer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
  },
  {
    icon: 'icon-pin',
    title: 'Sponsor Us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
  },
  {
    icon: 'icon-user-follow',
    title: 'Tell A Friend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
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
.support-icon .icon i {
  font-size: 32px;
  color: #ffd71a;
  margin-right: 10px;
}
.support-icon .title-post a:hover {
  color: #ffd71a;
}
.img-wrapper img {
  border-radius: 10px;
  object-fit: cover;
}
</style>
