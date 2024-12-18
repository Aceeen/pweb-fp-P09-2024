import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import FeedbackView from '../views/FeedbackView.vue';
import NewsView from '../views/NewsView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/feedback', name: 'Feedback', component: FeedbackView },
  { path: '/news', name: 'News', component: NewsView },
  { path: '/login', name: 'Login', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
