<template>
  <div>
    <h1>Country List</h1>
    <CountryList /> <!-- Use the shared component -->
  </div>
</template>

<script>
import { CountryList } from '~/static/dist/my-library.es.js';

export default {
  name: 'CountryPage',
  components: {
    CountryList
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
