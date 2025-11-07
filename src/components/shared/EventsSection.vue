<template>
  <section class="flat-row flat-our-events">
    <div class="container">
      <!-- Section Header -->
      <div class="row justify-center text-center mb-5">
        <div class="col-md-8 col-md-offset-2">
          <div class="title-section">
            <h4 class="subtitle">{{ subtitle }}</h4>
            <h2 class="section-title">
              <span>{{ highlightTitle }}</span> {{ mainTitle }}
            </h2>
          </div>
        </div>
      </div>

      <!-- Event Cards -->
      <div class="row g-4">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="col-md-4 col-sm-6"
        >
          <div class="event-card">
            <div class="event-image">
              <a :href="event.link" class="text-decoration-none">
                <img :src="event.image" :alt="event.title" />
              </a>
            </div>

            <div class="event-content">
              <p class="event-date">{{ event.date }}</p>
              <h5 class="event-title">
                <a :href="event.link" class="text-dark text-decoration-none">
                  {{ event.title }}
                </a>
              </h5>

              <ul class="event-meta">
                <li><i class="fa-regular fa-clock"></i> {{ event.time }}</li>
                <li><i class="fa-solid fa-location-dot"></i> {{ event.address }}</li>
              </ul>

              <p class="event-description">{{ event.description }}</p>

              <!-- Progress -->
              <!-- <div v-if="event.percentage" class="progress-wrapper">
                <div class="progress-info">
                  <span class="progress-label">Progress</span>
                  <span class="progress-value">{{ event.percentage }}%</span>
                </div>
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="{ width: event.percentage + '%' }"
                  ></div>
                </div>
              </div>

              <div class="event-footer">
                <a :href="event.link" class="event-button">Learn More</a>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div class="text-center mt-5" v-if="buttonText">
        <button class="flat-button button-style">{{ buttonText }}</button>
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
        time: "10:00 AM",
        address: "Dhaka University",
        percentage: 80,
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "#",
      },
      {
        image: "/images/about/index-2/6.jpg",
        date: "July 12, 2016",
        title: "Save life of small boys in prison for crime",
        time: "12:00 PM",
        address: "Dhaka University",
        percentage: 65,
        description:
          "Help raise awareness and support young boys in need of rehabilitation.",
        link: "#",
      },
      {
        image: "/images/about/index-2/7.jpg",
        date: "August 20, 2016",
        title: "Lotem por dapibus nulla id conet",
        time: "9:30 AM",
        address: "Dhaka University",
        percentage: 95,
        description:
          "Join our campaign to improve child education and make a lasting difference.",
        link: "#",
      },
    ],
  },
});
</script>

<style scoped>
/* ---- Layout ---- */
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

/* ---- Section Header ---- */
.title-section .subtitle {
  /* color: #17b26a; */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.title-section .section-title {
  font-size: 36px;
  font-weight: 700;
  color: #222;
}


/* ---- Card ---- */
.event-card {
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.event-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.event-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* ---- Content ---- */
.event-content {
  padding: 20px;
}

.event-date {
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
}

.event-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.event-meta {
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
  font-size: 14px;
  color: #555;
}

.event-meta li {
  display: inline-flex;
  align-items: center;
  margin-right: 15px;
}

.event-meta i {
  margin-right: 5px;
  /* color: #17b26a; */
}

.event-description {
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* ---- Progress ---- */
.progress-wrapper {
  margin-bottom: 15px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.progress-bar {
  background: #eee;
  border-radius: 8px;
  height: 6px;
  overflow: hidden;
}

.progress-fill {
  /* background: #17b26a; */
  height: 100%;
  width: 0;
  transition: width 1s ease-in-out;
}

/* ---- Footer ---- */
.event-footer {
  text-align: right;
}

.event-button {
  /* background: #17b26a; */
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 18px;
  border-radius: 6px;
  transition: background 0.3s ease;
  text-decoration: none;
}

.event-button:hover {
  /* background: #139b5c; */
}
</style>
