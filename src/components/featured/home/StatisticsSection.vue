<template>
  <div class="page-title parallax parallax2">
    <div class="overlay v1"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="(stat, index) in stats" :key="index">
          <div class="flat-counter">
            <div class="numb-count" :data-to="stat.number">{{ stat.number }} <span v-if="stat.label == 'Donation'">M</span></div>
            <div class="name-count"><p>{{ stat.label }}</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { number: 324, label: 'Volunteers' },
  { number: 984, label: 'Campaign' },
  { number: 232, label: 'Donation' },
  { number: 24, label: 'Awards' },
]
</script>
