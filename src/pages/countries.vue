<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Countries</ion-title>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/" />
        </ion-buttons>
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
