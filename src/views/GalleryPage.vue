<template>
    <div>
        <Banner class="parallax4" title="Gallery" background="/images/parallax/bg-parallax4.jpg"/>
        
        <EventsSection
            subtitle="Don't Miss Out"
            highlightTitle="Our"
            mainTitle="Events"
            buttonText="View All Events"
            :events="eventList"
        />
        <OurEvents highlight-title="Upcoming" />
        <Gallery 
            :showMore="false"
            moreText="Explore More"
            @view-more="handleLoadMore"
        />
    </div>
</template>

<script setup>
import Banner from '../components/shared/Banner.vue';
import Gallery from '../components/shared/Gallery.vue'


const eventList = [
  {
    image: "/images/about/index-2/5.jpg",
    date: "Dec 25, 2025",
    title: "Christmas Fundraiser for Kids",
    time: "9:00 AM",
    percentage: 70,
    description: "Help us bring smiles to children in need this Christmas.",
    link: "#",
  },
  {
    image: "/images/about/index-2/6.jpg",
    date: "Jan 5, 2026",
    title: "New Year’s Food Drive",
    time: "10:30 AM",
    percentage: 45,
    description: "Join our drive to distribute food to underprivileged families.",
    link: "#",
  },
  {
    image: "/images/about/index-2/5.jpg",
    date: "Dec 25, 2025",
    title: "Christmas Fundraiser for Kids",
    time: "9:00 AM",
    percentage: 70,
    description: "Help us bring smiles to children in need this Christmas.",
    link: "#",
  },
  {
    image: "/images/about/index-2/6.jpg",
    date: "Jan 5, 2026",
    title: "New Year’s Food Drive",
    time: "10:30 AM",
    percentage: 45,
    description: "Join our drive to distribute food to underprivileged families.",
    link: "#",
  },
];
</script>

<style lang="scss" scoped>

</style>