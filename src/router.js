import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '~/pages/index.vue';

const routes = [
  {
    path: '/',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
