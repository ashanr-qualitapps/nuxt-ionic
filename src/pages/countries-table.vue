<template>
  <ion-page>
    <ion-content class="p-4 bg-gray-light min-h-screen">
      <CountriesTable />
    </ion-content>
  </ion-page>
</template>

<script setup>
import CountriesTable from '~/components/CountriesTable.vue';
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
.bg-gray-light {
  background-color: #f3f3f3;
}
</style>
