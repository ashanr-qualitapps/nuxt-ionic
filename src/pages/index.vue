<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>
        <h1>Home Page</h1>
        <nuxt-link to="/countries">
          <ion-button>Go to Country List</ion-button>
        </nuxt-link>
        <CountryList /> <!-- Optionally include the component here if needed -->
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
