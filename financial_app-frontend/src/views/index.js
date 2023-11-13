import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Transactions from '@/views/Transactions.vue';
import Investments from '@/views/Investments.vue';
import Reports from '@/views/Reports.vue';
import Budgets from '@/views/Budgets.vue';
import Settings from '@/views/Settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },
    {
        path: '/investment',
        name: 'investment',
        component: Investments
      },
      {
        path: '/report',
        name: 'report',
        component: Reports
      },
      {
        path: '/budget',
        name: 'budget',
        component: Budgets
      },
      {
        path: '/setting',
        name: 'setting',
        component: Settings
      },
  ]
});
