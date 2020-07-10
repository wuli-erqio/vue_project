import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '/kanban1', name: 'kanban1', component: () => import('@/views/Echars/kanban1') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
