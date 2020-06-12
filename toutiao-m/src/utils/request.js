/**
 * 请求模块
 */
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  // 接口基础路径
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 请求发起会经过这里
  // config：本次请求的配置对象
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  // 这里必须要有return 否则请求就出不去，停在这里
  return config
}, function (error) {
  // 如果请求出错了（还没有发出去）会进入这里
  return Promise.reject(error)
})
// 响应拦截器

export default request
