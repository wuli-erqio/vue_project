import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    // name: 'layout', // 如果父路由有默认子路由，那么name就没有意义
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // 默认子路由, 只能有一个
        name: 'home',
        component: () => import('@/views/layout/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/layout/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/layout/video')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/layout/profile')
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search')
  }
]

const router = new VueRouter({
  routes
})

export default router
