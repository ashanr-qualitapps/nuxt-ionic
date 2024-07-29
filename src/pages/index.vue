<template>
  <ion-page>
    <Navbar @openModal="openModal" />
    <ion-content class="p-4 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold text-white mb-4">Welcome to MyApp</h1>
        <p class="text-xl text-gray-200 mb-8">This is a colorful homepage with Tailwind CSS and Flowbite components.</p>
        <nuxt-link to="/countries">
          <ion-button class="bg-white text-blue-500 hover:bg-gray-100">Go to Country List</ion-button>
        </nuxt-link>
        <button @click="openModal" class="btn btn-primary mt-4">Open Countries Modal</button>
      </div>
      <CountriesModal :is-open="isModalOpen" @close="closeModal" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
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
