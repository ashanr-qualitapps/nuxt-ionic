<template>
  <div>
    <h1>Home Page</h1>
    <nuxt-link to="/countries">Go to Country List</nuxt-link>
    <CountryList /> <!-- Use the shared component -->
  </div>
</template>

<script>
import { CountryList } from '~/static/dist/my-library.es.js'; // Import the shared component

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
