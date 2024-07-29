<template>
  <nav class="bg-primary fixed top-0 left-0 w-full shadow-lg z-50">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="flex items-center space-x-2">
        <a href="/" class="text-white text-2xl font-bold">NuxtIonic</a>
        <input type="text" placeholder="Search" class="ml-4 p-2 rounded bg-white text-black focus:outline-none" />
      </div>
      <div class="hidden md:flex items-center space-x-6">
        <a href="/" class="text-white">Home</a>
        <a href="/network" class="text-white">My Network</a>
        <a href="/jobs" class="text-white">Jobs</a>
        <a href="/messaging" class="text-white">Messaging</a>
        <a href="/notifications" class="text-white">Notifications</a>
        <div class="relative group">
          <button class="text-white">Profile</button>
          <ul class="absolute right-0 hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg">
            <li><a href="/profile" class="block py-2 px-4">View Profile</a></li>
            <li><a href="/settings" class="block py-2 px-4">Settings</a></li>
            <li><a href="/logout" class="block py-2 px-4">Logout</a></li>
          </ul>
        </div>
      </div>
      <button class="md:hidden text-white" @click="isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden">
      <ul class="bg-primary text-white">
        <li><a href="/" class="block py-2 px-4">Home</a></li>
        <li><a href="/network" class="block py-2 px-4">My Network</a></li>
        <li><a href="/jobs" class="block py-2 px-4">Jobs</a></li>
        <li><a href="/messaging" class="block py-2 px-4">Messaging</a></li>
        <li><a href="/notifications" class="block py-2 px-4">Notifications</a></li>
        <li><a href="/profile" class="block py-2 px-4">Profile</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style scoped>
.bg-primary {
  background-color: #0A66C2; /* LinkedIn blue */
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.group:hover .group-hover\:block {
  display: block;
}
</style>
