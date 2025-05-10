import HomePage from '../views/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Mission from '../components/Mission.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/mission', component: Mission },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
