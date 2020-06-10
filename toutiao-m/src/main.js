import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件库
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 动态设置基准值
import 'amfe-flexible'

// 注册使用后vant组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
