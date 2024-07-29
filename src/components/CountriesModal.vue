<template>
  <ion-modal :is-open="isOpen" @did-dismiss="$emit('close')">
    <ion-header>
      <ion-toolbar>
        <ion-title>Countries</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="$emit('close')">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ul>
        <li v-for="country in countries" :key="country.cca3" class="flex items-center space-x-2 p-4 border-b">
          <img :src="country.flags.png" alt="Flag" class="w-6 h-4" />
          <span>{{ country.name.common }}</span>
        </li>
      </ul>
    </ion-content>
  </ion-modal>
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
