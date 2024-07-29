<template>
  <div :class="['modal', isOpen ? 'block' : 'hidden']" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">Countries</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <ul>
            <li v-for="country in countries" :key="country.cca3" class="flex items-center space-x-2 p-4 border-b">
              <img :src="country.flags.png" alt="Flag" class="w-6 h-4" />
              <span>{{ country.name.common }}</span>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary bg-primary text-white hover:bg-primary-dark" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>
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
