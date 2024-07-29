<template>
  <ion-page>
    <ion-content class="p-4 bg-gray-light min-h-screen">
      <div class="container mx-auto text-center mt-20">     
        <nuxt-link to="/countries" class="block mb-10">
          <ion-button class="bg-linkedin text-white hover:bg-linkedin-dark">Go to Country List</ion-button>
        </nuxt-link>
        <button @click="openModal" class="mt-4 bg-linkedin text-white hover:bg-linkedin-dark px-4 py-2 rounded-md">Open Countries Modal</button>

        <nuxt-link to="/countries-table" class="block mb-10">
        <button  class="mt-4 bg-linkedin text-white hover:bg-linkedin-dark px-4 py-2 rounded-md">Countries Data Table</button>
        </nuxt-link>      
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
