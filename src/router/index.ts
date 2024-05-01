import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue') },
  { path: '/transactions', component: () => import('@/pages/Transactions.vue') },
  { path: '/accounts', component: () => import('@/pages/Accounts.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
