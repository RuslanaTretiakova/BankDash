import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/home/Home.vue') },
  { path: '/transactions', component: () => import('@/pages/transactions/Transactions.vue') },
  { path: '/accounts', component: () => import('@/pages/accounts/Accounts.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
