<!--  -->
<template>
  <div class='search-suggest'>
    <van-cell
      v-for="(text, index) in suggestions"
      :key="index"
      :title="text"
      icon="search"></van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search'
// 按需加载的好处：只会把使用到的成员加载进来
import { debounce } from 'lodash'
export default {
  name: 'SearchSuggest',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      suggestions: []
    }
  },
  computed: {},
  watch: {
    searchText: {
      // 当searchText发生改变的时候，就会调用handler函数
      // 注意：handler函数名称是固定的
      // handler (value) {
      //   this.loadSearchSuggestions(value)
      // },
      // debounce函数
      // 参数1：一个函数
      // 参数2：延迟时间，单位是毫秒
      // 返回值： 防抖之后的函数
      handler: debounce(function (value) {
        this.loadSearchSuggestions(value)
      }, 300),
      // 该回调将会在侦听开始之后被立即调用
      immediate: true
    }
  },
  methods: {
    async loadSearchSuggestions (q) {
      try {
        const { data } = await getSearchSuggestions(q)
        this.suggestions = data.data.options
      } catch (error) {
        this.$toast('数据获取失败，请稍后重试')
      }
    }
  },
  created () {}
}
</script>
<style lang='less' scoped>
</style>
