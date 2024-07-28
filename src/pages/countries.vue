<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Country List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <CountryList /> <!-- Use the shared component -->
    </ion-content>
  </ion-page>
</template>

<script>
import CountryList from '~/components/CountryList.vue';

export default {
  name: 'CountryPage',
  components: {
    CountryList
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
