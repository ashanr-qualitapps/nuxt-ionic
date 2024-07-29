<template>
  <nav class="bg-primary p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-white text-2xl font-bold">NuxtIonic</a>
      <button class="text-white md:hidden" @click="isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div :class="{'block': isOpen, 'hidden': !isOpen}" class="w-full md:flex md:items-center md:w-auto">
        <ul class="text-white md:flex md:justify-between md:items-center md:space-x-6">
          <li><a href="/" class="block py-2 px-4 hover:bg-primary-dark rounded-md">Home</a></li>
          <li><a href="/countries" class="block py-2 px-4 hover:bg-primary-dark rounded-md">Countries</a></li>
          <li><a href="/countries-table" class="block py-2 px-4 hover:bg-primary-dark rounded-md">Countries Table</a></li>
          <li><a href="/about" class="block py-2 px-4 hover:bg-primary-dark rounded-md">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<style scoped>
/* Additional styles if needed */
</style>
