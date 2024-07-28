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
        <nuxt-link to="/countries">Go to Country List</nuxt-link>
        <CountryList /> <!-- Use the shared component -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import CountryList from '~/components/CountryList.vue';

export default {
  name: 'HomePage',
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
