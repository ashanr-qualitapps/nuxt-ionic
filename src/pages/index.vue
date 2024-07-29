<template>
  <ion-page>
    <ion-content class="p-4 bg-primary-light min-h-screen">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold text-white mb-4">Welcome to MyApp</h1>
        <nuxt-link to="/countries">
          <ion-button class="bg-primary text-white hover:bg-primary-dark">Go to Country List</ion-button>
        </nuxt-link>
        <button @click="openModal" class="btn btn-primary mt-4 bg-primary text-white hover:bg-primary-dark">Open Countries Modal</button>
      </div>
      <CountriesModal :is-open="isModalOpen" @close="closeModal" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import CountriesModal from '~/components/CountriesModal.vue';
import { ref } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
