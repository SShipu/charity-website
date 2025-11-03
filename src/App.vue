<script setup>
import SiteHeader from './components/shared/SiteHeader.vue';
import SiteFooter from './components/shared/SiteFooter.vue';

</script>

<template>
    <div class="px-5">
        <SiteHeader />
        <router-view />
        <SiteFooter />
    </div>
</template>

<style scoped>

</style>
