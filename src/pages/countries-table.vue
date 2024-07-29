<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <ion-title>Countries Table</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="p-4">
      <div class="container mx-auto">
        <CountriesTable />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import CountriesTable from '~/components/CountriesTable.vue';
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
