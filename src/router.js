import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/index.vue';
import CountryPage from '@/pages/countries.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/countries',
    component: CountryPage,
    name: 'countries'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

