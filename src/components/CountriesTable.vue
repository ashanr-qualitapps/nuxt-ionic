<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Country List</h1>
      <input
        type="text"
        v-model="searchQuery"
        @input="filterCountries"
        placeholder="Search countries..."
        class="border p-2 rounded"
      />
    </div>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="border p-2">Flag</th>
            <th class="border p-2">Name</th>
            <th class="border p-2">Population</th>
            <th class="border p-2">Region</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="country in filteredCountries" :key="country.cca3">
            <td class="border p-2"><img :src="country.flags.png" alt="Flag" class="w-10 h-6" /></td>
            <td class="border p-2">{{ country.name.common }}</td>
            <td class="border p-2">{{ country.population.toLocaleString() }}</td>
            <td class="border p-2">{{ country.region }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const searchQuery = ref('');
const countries = ref([]);
const filteredCountries = ref([]);

const fetchCountries = async () => {
  const { data, error } = await useFetch('https://restcountries.com/v3.1/all');
  if (error.value) {
    console.error('Error fetching countries:', error.value);
  } else {
    countries.value = data.value;
    filteredCountries.value = countries.value;
  }
};

const filterCountries = () => {
  const query = searchQuery.value.toLowerCase();
  filteredCountries.value = countries.value.filter(country =>
    country.name.common.toLowerCase().includes(query)
  );
};

onMounted(fetchCountries);
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
