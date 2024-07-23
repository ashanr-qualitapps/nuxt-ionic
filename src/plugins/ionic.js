import { defineNuxtPlugin } from '#app';
import { IonicVue } from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(IonicVue);
});