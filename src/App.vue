<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/layout/HeaderComponent.vue';
import FooterComponent from './components/layout/FooterComponent.vue';

</script>

<template>
  <div class="app-container">
    <HeaderComponent />

    <RouterView />

    <FooterComponent />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

main {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
