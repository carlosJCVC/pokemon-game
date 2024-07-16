import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/modules/core/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dragon-ball',
    name: 'dbz',
    component: () => import('@/modules/dbz/pages/DbzGame.vue')
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('@/modules/pokemon/pages/PokemonGame.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
