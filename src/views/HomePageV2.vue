<template>
  <div>
    <!-- Your HTML content here -->
    <HeroSection />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import HeroSection from '../components/featured/home/HeroSection.vue';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper.js

// Plugins via npm
import 'owl.carousel';
import 'flexslider';

// For scripts not available via npm, you can still import manually
// import '@/assets/js/jquery.sticky.js';
// import '@/assets/js/jquery.easing.js';
// import '@/assets/js/jquery.countTo.js';
// import '@/assets/js/jquery.waypoints.js';
// import '@/assets/js/smoothscroll.js';
// import '@/assets/js/jquery.cookie.js';
// import '@/assets/js/switcher.js';
// import '@/assets/js/main.js';
// import '@/assets/js/jquery.themepunch.tools.min.js';
// import '@/assets/js/jquery.themepunch.revolution.min.js';
// import '@/assets/js/slider.js';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
  },
  setup() {
    onMounted(() => {
      // Ensure DOM is ready
      $(document).ready(() => {
        // Owl Carousel
        $('.carousel-container').owlCarousel({
          items: 3,
          loop: true,
          margin: 10,
          nav: true,
        });

        // Flexslider
        $('.slider-container').flexslider({
          animation: 'slide',
        });

        // Sticky menu
        $('.your-menu-selector').sticky({ topSpacing: 0 });

        // CountTo
        $('.count').each(function () {
          $(this).countTo();
        });

        // Isotope layout
        const $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          layoutMode: 'fitRows',
        });

        // Smooth scroll
        if (typeof smoothScroll !== 'undefined') {
          smoothScroll.init();
        }

        // Any other main.js logic can go here
      });
    });
  },
};
</script>

<style scoped>
/* Component-specific styles here */
</style>
