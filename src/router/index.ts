// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
      component: () => import('@/layouts/default/Default.vue'),
      path: '/',
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
