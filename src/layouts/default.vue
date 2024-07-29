<template>
  <ion-app>
    <ion-header>
      <ion-toolbar class="bg-gradient-to-r from-blue-500 to-purple-600">
        <ion-title>MyApp</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <Navbar @openModal="openModal" />
      <NuxtPage />
      <CountriesModal :is-open="isModalOpen" @close="closeModal" />
    </ion-content>
  </ion-app>
</template>

<script setup>
import Navbar from '~/components/NavBar.vue';
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
