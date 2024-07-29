<template>
  <div :class="['modal', isOpen ? 'block' : 'hidden']" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white fixed top-0 left-0 right-0">
          <h5 class="modal-title">Countries</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="$emit('close')">X</button>
        </div>
        <div class="modal-body pt-12">
          <ul>
            <li v-for="country in displayedCountries" :key="country.cca3" class="flex items-center space-x-2 p-4 border-b">
              <img :src="country.flags.png" alt="Flag" class="w-6 h-4" />
              <span>{{ country.name.common }}</span>
            </li>
          </ul>
          <div ref="loadMoreTrigger" class="load-more-trigger"></div>
          <div v-if="isLoading" class="loading-indicator text-center py-4">
            <span>Loading...</span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary bg-primary text-white hover:bg-primary-dark" @click="$emit('close')">Close</button>
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

const displayedCountries = ref([]);
const itemsPerPage = 10;
const isLoading = ref(false);
const loadMoreTrigger = ref(null);
let allCountries = ref([]);

const fetchCountries = async () => {
  isLoading.value = true;
  const { data, error } = await useFetch('https://restcountries.com/v3.1/all');
  if (error.value) {
    console.error('Error fetching countries:', error.value);
  } else {
    allCountries.value = data.value;
    displayedCountries.value = allCountries.value.slice(0, itemsPerPage);
    initIntersectionObserver();
  }
  isLoading.value = false;
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
    const nextItems = displayedCountries.value.length + itemsPerPage;
    displayedCountries.value = [...displayedCountries.value, ...allCountries.value.slice(displayedCountries.value.length, nextItems)];
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
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
