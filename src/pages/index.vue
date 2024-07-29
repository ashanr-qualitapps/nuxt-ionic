<template>
  <ion-page>
    <ion-content class="p-4 bg-gray-light min-h-screen">
      <div class="container mx-auto text-center mt-20">
        <h1 class="text-5xl font-bold text-linkedin-dark mb-4">Welcome to MyApp</h1>
        <nuxt-link to="/countries" class="block mb-10">
          <ion-button class="bg-linkedin text-white hover:bg-linkedin-dark">Go to Country List</ion-button>
        </nuxt-link>
        <button @click="openModal" class="mt-4 bg-linkedin text-white hover:bg-linkedin-dark px-4 py-2 rounded-md">Open Countries Modal</button>

        <ul class="absolute  bg-linkedin mt-2 rounded-md shadow-lg">
          <li><a href="/countries" class="block py-2 px-4 hover:bg-linkedin-dark  text-white rounded-md">Country List</a></li>
          <li><a href="/countries-table" class="block py-2 px-4 hover:bg-linkedin-dark  text-white rounded-md">Country Table</a></li>
        </ul>
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

.bg-linkedin {
  background-color: #0077B5;
}

.bg-linkedin-dark {
  background-color: #004182;
}

.text-linkedin-dark {
  color: #004182;
}
</style>
