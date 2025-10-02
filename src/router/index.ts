import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Calculator from '@/views/Calculator.vue';
import NumberTranslator from '@/views/NumberTranslator.vue';
import MultiplicationTable from '@/views/MultiplicationTable.vue';
import Experience from '@/views/Experience.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/translator',
    name: 'Translator',
    component: NumberTranslator
  },
  {
    path: '/multiplication',
    name: 'Multiplication',
    component: MultiplicationTable
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;