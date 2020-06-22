<template>
  <div class='search-container'>
    <!-- 顶部搜索栏 -->
    <!--  在 van-search 外层增加 form 标签，
          且 action 不为空，即可在 iOS 输入法中显示搜索按钮 -->
    <form class="search-form" action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @search="onSearch"
        @cancel="onCancel"
        @focus="isReaultShow = false"
      />
    </form>
    <!-- /顶部搜索栏 -->

    <!-- 搜索结果 -->
    <search-result
      v-if="isReaultShow"
      :search-text="searchText"
    />
    <!-- /搜索结果 -->

    <!-- 联想建议 -->
    <search-suggest
      v-else-if="searchText"
      :search-text="searchText"
      @search="onSearch"/>
    <!-- /联想建议 -->

    <!-- 搜索历史记录 -->
    <search-history
      v-else
      :search-histories="searchHistories"
      @clear-search-histories="searchHistories = []"
      @search="onSearch"/>
    <!-- /搜索历史记录 -->

  </div>
</template>

<script>
import SearchHistory from './components/search-history'
import SearchResult from './components/search-result'
import SearchSuggest from './components/search-suggest'
import { setItem, getItem } from '@/utils/storage'
export default {
  name: 'SearchIndex',
  components: {
    SearchHistory,
    SearchResult,
    SearchSuggest
  },
  props: {},
  data () {
    return {
      searchText: '',
      isReaultShow: false, // 控制搜索结果的展示
      searchHistories: getItem('TOUTIAO_SEARCH_HISRORIES') || []
    }
  },
  computed: {},
  watch: {
    searchHistories (value) {
      setItem('TOUTIAO_SEARCH_HISRORIES', value)
    }
  },
  methods: {
    onSearch (val) {
      // 更新文本框内容
      this.searchText = val
      const index = this.searchHistories.indexOf(val)
      // 存储搜索框历史记录
      if (index !== -1) {
        this.searchHistories.splice(index, 1)
      }
      this.searchHistories.unshift(val)
      // 渲染搜索结果
      this.isReaultShow = true
    },
    onCancel () {
      this.$router.back()
    }
  },
  created () {}
}
</script>
<style lang='less' scoped>
.search-container {
  padding-top: 108px;
  .van-search__action {
    color: #fff;
  }
  .search-form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
}
</style>
