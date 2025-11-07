<template>
  <section class="flat-row portfolio-row-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="flat-portfolio v2">
            <div class="portfolio-wrap clearfix">
              <div
                v-for="(item, index) in portfolios"
                :key="index"
                class="item"
              >
                <div class="item-content">
                  <img :src="item.image" :alt="item.title" />
                  <div class="overlay">
                    <div class="link">
                      <div class="icon-zoom"></div>
                    </div>
                  </div>
                  <div class="title-post">
                    <a :href="item.link || '#'" class="text-decoration-none">
                      {{ item.title }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="about-button style-v1" v-if="showMore">
              <button class="flat-button button-style" @click="$emit('view-more')">
                {{ moreText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  portfolios: {
    type: Array,
    default: () => [
      { image: 'images/portfolio/1.jpg', title: 'Lorem ipsum dolor sit amet', link: 'gallery.html#' },
      { image: 'images/portfolio/2.jpg', title: 'Lorem ipsum dolor sit amet', link: 'gallery.html#' },
      { image: 'images/portfolio/3.jpg', title: 'Lorem ipsum dolor sit amet', link: 'gallery.html#' },
      { image: 'images/portfolio/4.jpg', title: 'Lorem ipsum dolor sit amet', link: 'gallery.html#' },
      { image: 'images/portfolio/5.jpg', title: 'Lorem ipsum dolor sit amet', link: 'gallery.html#' },
      { image: 'images/portfolio/9.jpg', title: 'Lorem ipsum dolor sit amet', link: 'gallery.html#' },
      { image: 'images/portfolio/11.jpg', title: 'Lorem ipsum dolor sit amet', link: 'gallery.html#' },
      { image: 'images/portfolio/10.jpg', title: 'Lorem ipsum dolor sit amet', link: 'gallery.html#' },
    ],
  },
  showMore: { type: Boolean, default: true },
  moreText: { type: String, default: 'View More' },
});
</script>

<style scoped>
.flat-portfolio.v2 {
  text-align: center;
}

.portfolio-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.item {
  width: auto !important;
  /* width: calc(25% - 18px); */
  /* margin-bottom: 24px; */
  margin-bottom: 0 !important;
  padding: 0 !important;
}

.item-content {
  position: relative;
  overflow: hidden;
}

.item-content img {
  width: 100%;
  display: block;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-content:hover .overlay {
  opacity: 1;
}

.icon-zoom {
  width: 40px;
  height: 40px;
  background-color: #ffd71a;
  border-radius: 50%;
}

.title-post {
  margin-top: 12px;
}

.title-post a {
  color: #222;
  font-weight: 600;
  text-decoration: none;
}

.title-post a:hover {
  color: #ffd71a;
}

.flat-button {
  background-color: #ffd71a;
  color: #000;
  font-weight: 600;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
}

.flat-button:hover {
  background-color: #eac800;
}

.about-button {
  margin-top: 40px;
}
</style>
