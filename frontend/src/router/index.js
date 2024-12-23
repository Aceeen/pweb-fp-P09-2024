import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import FeedbackView from '../views/FeedbackView.vue';
import NewsView from '../views/NewsView.vue';
import LoginView from '../views/LoginView.vue';

import UserDashboard from '../views/UserDashboard.vue';
import AdminPanel from '../views/AdminPanel.vue';
import AdminDetail from '../views/AdminDetail.vue'; // Detail admin page
import AdminEdit from '../views/AdminEdit.vue'; // Edit admin page
import AdminCreate from '../views/AdminCreate.vue'; // Create admin page
import Donate from '../views/User/donate.vue'; // Import donate.vue
import FavoritePage from "../views/User/favorite.vue"; // Path ke file favorite.vue
import ThankYouPage from "../views/User/thanks.vue"; // Import thanks.vue

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/feedback', name: 'Feedback', component: FeedbackView },
  { path: '/news', name: 'News', component: NewsView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/user-dashboard', name: 'UserDashboard', component: UserDashboard },
  { path: "/User/favorite", name: "FavoritePage", component: FavoritePage },
  { path: '/admin-panel', name: 'AdminPanel', component: AdminPanel },
  { path: '/User/donate/:crowdfundId', name: 'Donate', component: Donate, props: true },
  { path: '/User/thanks', name: 'ThankYou', component: ThankYouPage },
  { path: '/admin/:crowdfund_id', name: 'AdminDetail', component: AdminDetail, props: true, },
  { path: '/admin/:crowdfund_id/edit', name: 'AdminEdit', component: AdminEdit, props: true, },
  { path: '/admin/create', name: 'AdminCreate', component: AdminCreate },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
