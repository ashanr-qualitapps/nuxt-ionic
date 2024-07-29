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

const fetchCountries = async () => {
  isLoading.value = true;
  const { data, error } = await useFetch('https://restcountries.com/v3.1/all');
  if (error.value) {
    console.error('Error fetching countries:', error.value);
  } else {
    displayedCountries.value = data.value.slice(0, itemsPerPage);
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
    displayedCountries.value = [...displayedCountries.value, ...data.value.slice(displayedCountries.value.length, nextItems)];
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
.load-more-trigger {
  height: 1px;
}

.loading-indicator {
  text-align: center;
  padding: 10px;
}

.modal {
  display: none;
}

.modal.block {
  display: block;
}
</style>
