/**
 * 请求模块
 */
import axios from 'axios'
import store from '@/store'
import JSONBig from 'json-bigint'

// 可以处理数据中超出整数范围的数据
// JSONBig.parse()
// JSONBig.stringify()
// JSONBig使用的时候需要把BigNumber 类型的数据转为字符串来使用
// const jsonStr = '{"art_id": 1234567891034857388}'
// JSONBig.parse(jsonStr).art_id.toString()
const request = axios.create({
  // 接口基础路径
  baseURL: 'http://ttapi.research.itcast.cn/',
  // axios 默认会在内部这样处理后端返回的数据
  // data: 后端返回的原始数据,说白了就是JSON格式的字符串
  transformResponse: [function (data) {
    try {
      return JSONBig.parse(data)
    } catch (error) {
      return data
    }
  }]
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
