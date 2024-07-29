<template>
  <div class="country-list">
    <h2 class="text-2xl font-semibold mb-4 text-primary-dark">Countries V1.1</h2>
    <ul class="list-group">
      <li v-for="country in displayedCountries" :key="country.cca3" class="list-group-item flex items-center space-x-2">
        <img :src="country.flags.png" alt="Flag" class="flag w-6 h-4" />
        <span>{{ country.name.common }}</span>
      </li>
    </ul>
    <div ref="loadMoreTrigger" class="load-more-trigger"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const countries = ref([]);
const displayedCountries = ref([]);
const itemsPerPage = 10;
const loadMoreTrigger = ref(null);

const fetchCountries = async () => {
  const { data, error } = await useFetch('/all', {
    baseURL: 'https://restcountries.com/v3.1'
  });
  if (error.value) {
    console.error('Error fetching countries:', error.value);
  } else {
    countries.value = data.value;
    displayedCountries.value = countries.value.slice(0, itemsPerPage);
    initIntersectionObserver();
  }
};

const initIntersectionObserver = () => {
  const observer = new IntersectionObserver(loadMore, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  });
  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value);
  }
};

const loadMore = (entries) => {
  if (entries[0].isIntersecting) {
    const nextItems = countries.value.slice(
      displayedCountries.value.length,
      displayedCountries.value.length + itemsPerPage
    );
    displayedCountries.value = [...displayedCountries.value, ...nextItems];
  }
};

onMounted(fetchCountries);
</script>

<style scoped>
.country-list {
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
}

.flag {
  width: 20px;
  height: 15px;
  margin-right: 10px;
}

.load-more-trigger {
  height: 1px;
}
</style>
