import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // 一个对象，用于存储当前登录用户信息，token等数据
    user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    // user: null
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止刷新丢失，需要把数据备份到本地存储
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
