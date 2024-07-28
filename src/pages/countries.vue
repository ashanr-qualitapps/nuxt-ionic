<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Countries</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <CountryList />
    </ion-content>
  </ion-page>
</template>

<script setup>
import CountryList from '~/components/CountryList.vue';
</script>
