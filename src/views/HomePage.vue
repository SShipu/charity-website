<template>
  <div class="homepage">

    <!-- Hero / Mission & Vision -->
    <HeroSection />
    <FeaturedCauses />
    <Vission />

    <!-- About Charry -->
    <AboutCharry />

    <!-- Statistics / Success Stories -->
    <StatisticsSection />

    <!-- Recent Causes / Campaigns -->
    <!-- <RecentCauses /> -->

    <!-- Events Section -->
    <OurEvents />

     <!-- Volunteer CTA -->
    <DonateNow />
    <SuccessStories />
    <!-- Testimonials -->
    <!-- <Testimonials /> -->

    <!-- Latest News -->
    <!-- <LatestNews /> -->

    <!-- Footer -->
    <!-- <FooterSection /> -->
  </div>
</template>

<script setup>
import HeroSection from '../components/featured/home/HeroSection.vue'
import FeaturedCauses from '../components/featured/home/FeaturedCauses.vue'
import Vission from '../components/featured/home/Vission.vue'
import AboutCharry from '../components/featured/home/AboutCharry.vue'
import StatisticsSection from '../components/featured/home/StatisticsSection.vue'
    // import RecentCauses from '../components/featured/home/RecentCauses.vue'
import DonateNow from '../components/featured/home/DonateNow.vue'
import OurEvents from '../components/shared/Event.vue'
import SuccessStories from '../components/featured/home/SuccessStories.vue'
// import Testimonials from './components/Testimonials.vue'
// import LatestNews from './components/LatestNews.vue'
// import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
/* Global homepage styles if needed */
</style>
