<template>
  <nav class="bg-linkedin text-white fixed top-0 left-0 w-full shadow-lg z-50">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo and Brand Name -->
      <div class="flex items-center space-x-2">
        <a href="/" class="text-2xl font-bold text-white">NuxtIonic</a>
      </div>
      <!-- Hamburger Menu for Mobile -->
      <button class="text-white md:hidden" @click="isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <!-- Navigation Links -->
      <div :class="{'block': isOpen, 'hidden': !isOpen}" class="w-full md:flex md:items-center md:w-auto">
        <ul class="text-white md:flex md:justify-between md:items-center md:space-x-6">
          <li><a href="/" class="block py-2 px-4 hover:bg-linkedin-dark text-white  text-white  rounded-md">Home</a></li>
          <li class="relative group">
            <a href="#" class="block py-2 px-4 hover:bg-linkedin-dark text-white rounded-md">Countries</a>
            <ul class="absolute hidden group-hover:block bg-linkedin mt-2 rounded-md shadow-lg">
              <li><a href="/countries" class="block py-2 px-4 hover:bg-linkedin-dark  text-white rounded-md">Country List</a></li>
              <li><a href="/countries-table" class="block py-2 px-4 hover:bg-linkedin-dark  text-white rounded-md">Country Table</a></li>
            </ul>
          </li>
          <li><button @click="openModal" class="block py-2 px-4 bg-linkedin-dark text-white hover:bg-linkedin-light rounded-md">Open Modal</button></li>
        </ul>
      </div>
    </div>
    <CountriesModal :is-open="isModalOpen" @close="closeModal" />
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import CountriesModal from '~/components/CountriesModal.vue';

const isOpen = ref(false);
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.bg-linkedin {
  background-color: #0077B5;
}

.bg-linkedin-light {
  background-color: #E5F2FF;
}

.bg-linkedin-dark {
  background-color: #004182;
}

.fixed {
  position: fixed;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.w-full {
  width: 100%;
}

.z-50 {
  z-index: 50;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.group:hover .group-hover\:block {
  display: block;
}
</style>
