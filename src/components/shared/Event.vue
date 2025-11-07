<template>
  <section class="flat-row flat-our-events">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-8 col-md-offset-2">
          <div class="title-section">
            <h4>{{ subtitle }}</h4>
            <h2><span>{{ highlightTitle }}</span> {{ mainTitle }}</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="flat-events">
            <article
              v-for="(event, index) in events"
              :key="index"
              class="entry clearfix"
              :class="{ 'entry-style1': index % 2 !== 0 }"
            >
              <div class="events-post">
                <a :href="event.link" class="text-dark text-decoration-none">
                  <img :src="event.image" :alt="event.title" />
                </a>
              </div>

              <div class="content-post">
                <p class="date">{{ event.date }}</p>
                <h2 class="title-post">
                  <a :href="event.link" class="text-dark text-decoration-none">
                    {{ event.title }}
                  </a>
                </h2>

                <div class="meta-post clearfix">
                  <ul>
                    <li class="time">{{ event.time }}</li>
                    <li class="address">
                      <a :href="event.addressLink" class="text-dark text-decoration-none">
                        {{ event.address }}
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="entry-post">
                  <p>{{ event.description }}</p>
                  <div class="more">
                    <a :href="event.link" class="text-dark text-decoration-none">Learn More</a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="row">
            <div class="flat-divider d60px"></div>
          </div>

          <div class="about-button" v-if="buttonText">
            <button class="flat-button button-style">{{ buttonText }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  subtitle: { type: String, default: "You can join Us" },
  highlightTitle: { type: String, default: "Our" },
  mainTitle: { type: String, default: "Events" },
  buttonText: { type: String, default: "View More" },
  events: {
    type: Array,
    default: () => [
      {
        image: "/images/about/index-2/5.jpg",
        date: "June 05, 2016",
        title: "Duis temus nulla id conguet",
        time: "10.00 am",
        address: "Dhaka University",
        addressLink: "#",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "#",
      },
      {
        image: "/images/about/index-2/6.jpg",
        date: "June 05, 2016",
        title: "Duis temus nulla id conguet",
        time: "10.00 am",
        address: "Dhaka University",
        addressLink: "#",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "#",
      },
      {
        image: "/images/about/index-2/7.jpg",
        date: "June 05, 2016",
        title: "Lotem por dapibus nulla id conet",
        time: "10.00 am",
        address: "Dhaka University",
        addressLink: "#",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "#",
      },
    ],
  },
});
</script>

<style scoped>
.row.justify-center {
  display: flex;
  justify-content: center;
}

.text-dark {
  color: #000 !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-none:hover {
  text-decoration: none;
}
</style>
