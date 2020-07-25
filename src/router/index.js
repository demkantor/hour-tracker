import Vue from 'vue';
import VueRouter from 'vue-router';
import HoursLog from '../views/HoursLog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HoursLog',
    component: HoursLog
  }
];

const router = new VueRouter({
  routes
});

export default router;
