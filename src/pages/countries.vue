<template>
    <div>
      <h1>Country List</h1>
      <CountryList />
    </div>
  </template>
  
  <script>
import { CountryList } from '~/static/dist/my-library.es.js'; // Import the shared component
  
  export default {
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
  