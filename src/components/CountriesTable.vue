<template>
  <ion-content>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">Flag</th>
            <th scope="col" class="py-3 px-6">Name</th>
            <th scope="col" class="py-3 px-6">Population</th>
            <th scope="col" class="py-3 px-6">Region</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="country in countries" :key="country.cca3" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6"><img :src="country.flags.png" alt="Flag" class="w-6 h-4" /></td>
            <td class="py-4 px-6">{{ country.name.common }}</td>
            <td class="py-4 px-6">{{ country.population.toLocaleString() }}</td>
            <td class="py-4 px-6">{{ country.region }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </ion-content>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const countries = ref([]);

const fetchCountries = async () => {
  const { data, error } = await useFetch('https://restcountries.com/v3.1/all');
  if (error.value) {
    console.error('Error fetching countries:', error.value);
  } else {
    countries.value = data.value;
  }
};

onMounted(fetchCountries);
</script>
