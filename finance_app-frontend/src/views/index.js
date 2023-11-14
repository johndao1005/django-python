import {createRouter, createWebHistory} from 'vue-router'  
import Dashboard from '@/views/Dashboard/Dashboard.vue';
// import Transactions from '@/views/Transactions/Transactions.vue';
// import Investments from '@/views/Investment/Investments.vue';
// import Reports from '@/views/Report/Reports.vue';
// import BudgetsView from '@/views/Budget/BudgetsView.vue';
// import Settings from '@/views/Setting/Settings.vue';


export default new createRouter({
  // mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    // {
    //   path: '/transactions',
    //   name: 'transactions',
    //   component: Transactions
    // },
    // {
    //     path: '/investment',
    //     name: 'investment',
    //     component: Investments
    //   },
    //   {
    //     path: '/report',
    //     name: 'report',
    //     component: Reports
    //   },
    //   {
    //     path: '/budget',
    //     name: 'budget',
    //     component: BudgetsView
    //   },
    //   {
    //     path: '/setting',
    //     name: 'setting',
    //     component: Settings
    //   },
  ]
});
