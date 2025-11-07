<template>
  <section class="flat-row partners-wrapper">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-8 col-md-offset-2">
          <div class="title-section text-center">
            <h4>Working to save world</h4>
            <h2><span>Our</span> Sponsors</h2>
          </div>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-md-10 col-lg-offset-1 clearfix">
          <div class="partners flex flex-wrap justify-center gap-6">
            <div
              v-for="(partner, index) in partners"
              :key="index"
              class="partner"
              :class="partner.position"
            >
              <img
                :src="partner.image"
                :alt="partner.name"
                class="w-32 h-auto object-contain hover:opacity-80 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  { name: 'Partner 1', image: '/images/clients/1.jpg', position: 'top' },
  { name: 'Partner 2', image: '/images/clients/2.jpg', position: 'top' },
  { name: 'Partner 3', image: '/images/clients/3.jpg', position: 'top' },
  { name: 'Partner 4', image: '/images/clients/4.jpg', position: 'top last' },
  { name: 'Partner 5', image: '/images/clients/5.jpg', position: 'bottom' },
  { name: 'Partner 6', image: '/images/clients/6.jpg', position: 'bottom' },
  { name: 'Partner 7', image: '/images/clients/7.jpg', position: 'bottom' },
  { name: 'Partner 8', image: '/images/clients/8.jpg', position: 'bottom last' },
];
</script>

<style scoped>
.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.partner {
  margin: 15px;
}
.partner img {
  width: 120px;
  transition: all 0.3s ease;
}
.partner img:hover {
  transform: scale(1.05);
}
.title-section h2 span {
  color: #ffd71a;
}
</style>
