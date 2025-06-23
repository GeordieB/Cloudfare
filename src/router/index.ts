import HomePage from '../views/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomePage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
