import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { IonicVue } from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

// Import Tailwind CSS and Flowbite
import 'tailwindcss/tailwind.css';
import 'flowbite';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});