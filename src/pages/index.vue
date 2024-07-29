<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-blue-500 text-white">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="p-4">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-4">Home Page</h1>
        <nuxt-link to="/countries">
          <ion-button class="bg-blue-500 text-white">Go to Country List</ion-button>
        </nuxt-link>
        <CountryList />
        <!-- Example Flowbite Component -->
        <button class="btn btn-primary mt-4">Flowbite Button</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import CountryList from '~/components/CountryList.vue';
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
