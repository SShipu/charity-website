<template>
    <div>
        <Banner class="parallax4" title="About Us" background="/images/parallax/bg-parallax4.jpg"/>
        <AboutMore />
        <HistoryDetails />
        <Volunteer />
        <Sponsors />
    </div>
</template>

<script setup>
import Banner from '../components/shared/Banner.vue'
// import Banner from '../components/featured/about/Banner.vue'
import AboutMore from '../components/featured/about/AboutMore.vue'
import HistoryDetails from '../components/featured/about/HistoryDetails.vue'
import Volunteer from '../components/featured/about/Volunteer.vue'
import Sponsors from '../components/featured/about/Sponsors.vue'

</script>

<style lang="scss" scoped>

</style>