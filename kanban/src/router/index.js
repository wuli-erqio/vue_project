import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/kanban1',
    children: [
      { path: '/kanban1', name: 'kanban1', component: () => import('@/views/Echarts/kanban1') },
      { path: '/kanban2', name: 'kanban2', component: () => import('@/views/Echarts/kanban2') },
      { path: '/kanban3', name: 'kanban3', component: () => import('@/views/Echarts/kanban3') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
