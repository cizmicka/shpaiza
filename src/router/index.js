import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ingredients',
    name: 'Ingredients',
    component: () =>
      import(/* webpackChunkName: "ingredients" */ '@/views/Ingredients')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () =>
      import(/* webpackChunkName: "recipes" */ '@/views/Recipes')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
