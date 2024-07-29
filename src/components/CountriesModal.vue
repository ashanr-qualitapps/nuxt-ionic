<template>
  <div :class="['modal', isOpen ? 'block' : 'hidden']" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white fixed top-0 left-0 right-0">
          <h5 class="modal-title">Countries</h5>
          <button type="button" class="btn-close text-white" aria-label="Close" @click="$emit('close')">X</button>
        </div>
        <div class="modal-body pt-16">
          <input
            type="text"
            v-model="searchQuery"
            @input="filterCountries"
            placeholder="Search countries..."
            class="border p-2 rounded w-full mb-4"
          />
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
                  <td class="border p-2 text-gray-800">{{ country.name.common }}</td>
                  <td class="border p-2 text-gray-800">{{ country.population.toLocaleString() }}</td>
                  <td class="border p-2 text-gray-800">{{ country.region }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div ref="loadMoreTrigger" class="load-more-trigger"></div>
          <div v-if="isLoading" class="loading-indicator text-center py-4">
            <span>Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useFetch } from '#app';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const searchQuery = ref('');
const countries = ref([]);
const filteredCountries = ref([]);
const itemsPerPage = 10;
const isLoading = ref(false);
const loadMoreTrigger = ref(null);

const fetchCountries = async () => {
  isLoading.value = true;
  const { data, error } = await useFetch('https://restcountries.com/v3.1/all');
  if (error.value) {
    console.error('Error fetching countries:', error.value);
  } else {
    countries.value = data.value;
    filteredCountries.value = countries.value.slice(0, itemsPerPage);
    initIntersectionObserver();
  }
  isLoading.value = false;
};

const filterCountries = () => {
  const query = searchQuery.value.toLowerCase();
  filteredCountries.value = countries.value.filter(country =>
    country.name.common.toLowerCase().includes(query)
  );
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
  if (entries[0].isIntersecting && !isLoading.value) {
    const nextItems = filteredCountries.value.length + itemsPerPage;
    filteredCountries.value = [...filteredCountries.value, ...countries.value.slice(filteredCountries.value.length, nextItems)];
  }
};

onMounted(fetchCountries);

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    fetchCountries();
  }
});
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal.block {
  display: block;
}

.modal-dialog {
  margin: 5% auto;
  width: 80%;
  max-width: 600px;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  max-height: 90vh;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #0077B5;
}

.modal-body {
  overflow-y: auto;
  padding-top: 4rem; /* Adjust to ensure content isn't hidden under sticky header */
}

.modal-footer {
  padding: 1rem;
  text-align: right;
}

.btn-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.load-more-trigger {
  height: 1px;
}

.loading-indicator {
  text-align: center;
  padding: 10px;
}
</style>
