<template>
  <section class="flat-row flat-about-charry">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-8 col-md-offset-2">
          <div class="title-section text-center">
            <h4>{{ subtitle }}</h4>
            <h2>
              <span>{{ highlight }}</span> {{ title }}
            </h2>
          </div>
        </div>
      </div>

      <div class="about-charry">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img :src="image" alt="About Charry" class="img-fluid" />
          </div>

          <div class="col-md-6">
            <div class="about-charry-post">
              <h4 class="title-post">
                <RouterLink to="/about">We Serve the Humanity</RouterLink>
              </h4>
              <p class="style-v1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
              <p>
                Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
              </p>
              <p>
                Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div class="about-button">
                <button class="flat-button button-style">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  subtitle: { type: String, default: "a little bit more" },
  highlight: { type: String, default: "About" },
  title: { type: String, default: "Charry" },
  image: { type: String, default: "/images/about/1.jpg" }
})
</script>

<style scoped>
.title-section h4 {
  text-transform: uppercase;
  color: #777;
  font-weight: 500;
  margin-bottom: 10px;
}

.title-section h2 {
  font-size: 36px;
  font-weight: bold;
}

.title-section span {
  color: #ffd71a;
}

.about-charry-post .title-post a {
  color: #000;
  text-decoration: none;
}

.about-charry-post .title-post a:hover {
  text-decoration: underline;
}

.flat-button.button-style {
  background-color: #ffd71a;
  color: #000;
  border: none;
  padding: 10px 24px;
  font-weight: 600;
  border-radius: 4px;
  transition: 0.3s;
}

.flat-button.button-style:hover {
  background-color: #e6c218;
}
</style>
