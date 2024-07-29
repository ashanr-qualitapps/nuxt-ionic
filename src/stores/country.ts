import { defineStore } from 'pinia';

export const useCountryStore = defineStore('country', {
  state: () => ({
    selectedCountry: null,
  }),
  actions: {
    selectCountry(country) {
      this.selectedCountry = country;
    },
  },
});
