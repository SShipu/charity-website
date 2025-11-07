<template>
  <div class="page-title parallax parallax4">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="page-title-heading">
            <h2 class="title">{{ title }}</h2>
          </div>
          <!-- <div class="breadcrumbs">
            <ul>
              <li class="home">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li>{{ title }}</li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "About"
  }
})
</script>

<style scoped>
.page-title {
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 100px 0;
}

.page-title-heading .title {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 10px;
}

.breadcrumbs ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
}

.breadcrumbs li {
  color: #fff;
}

.breadcrumbs li.home a {
  color: #ffd71a;
  text-decoration: none;
}

.breadcrumbs li.home a:hover {
  text-decoration: underline;
}
</style>
