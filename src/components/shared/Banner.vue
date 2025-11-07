<template>
    <div class="page-title parallax" :style="{
        backgroundImage: background ? `url(${background})` : defaultBackground
    }">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="page-title-heading">
                        <h2 class="title">{{ title }}</h2>
                    </div>

                    <div v-if="breadcrumbs.length" class="breadcrumbs">
                        <ul>
                            <li 
                                v-for="(crumb, index) in computedBreadcrumbs" 
                                :key="index"
                                :class="{ home: index === 0 }"
                            >
                                <RouterLink v-if="crumb.to && index !== computedBreadcrumbs.length - 1" :to="crumb.to">
                                    {{ crumb.label }}</RouterLink>
                                <span v-else>{{ crumb.label }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  background: {
    type: String,
    default: ""
  },
  breadcrumbs: {
    type: Array,
    default: () => []
  }
});

const defaultBackground =
  "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.7))";

const computedBreadcrumbs = computed(() => {
  // Default breadcrumbs if none provided
  if (!props.breadcrumbs.length) {
    return [
      { label: "Home", to: "/" },
      { label: props.title }
    ];
  }
  return props.breadcrumbs;
});
</script>

<style scoped>
.page-title {
    background-size: cover;
    background-position: center;
    color: #fff;
    /* padding: 100px 0; */
    position: relative;
}

.page-title::before {
    content: "";
    position: absolute;
    inset: 0;
    /* background: rgba(0, 0, 0, 0.5); */
}

.page-title-heading {
    position: relative;
    z-index: 1;
}

.page-title-heading .title {
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 15px;
}

.breadcrumbs {
    position: relative;
    z-index: 1;
}

.breadcrumbs ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
}

.breadcrumbs li {
    color: #fff;
}

.breadcrumbs li::after {
    content: "/";
    margin-left: 8px;
    color: #fff;
}

.breadcrumbs li:last-child::after {
    content: "";
}

.breadcrumbs li.home a {
    color: #ffd71a;
    text-decoration: none;
}

.breadcrumbs li.home a:hover {
    text-decoration: underline;
}
</style>
