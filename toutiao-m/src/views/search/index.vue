<template>
  <div class='search-container'>
    <!-- 顶部搜索栏 -->
    <!--  在 van-search 外层增加 form 标签，
          且 action 不为空，即可在 iOS 输入法中显示搜索按钮 -->
    <form action="/">
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
    <search-result v-if="isReaultShow"/>
    <!-- /搜索结果 -->

    <!-- 联想建议 -->
    <search-suggest
      v-else-if="searchText"
      :search-text="searchText"/>
    <!-- /联想建议 -->

    <!-- 搜索历史记录 -->
    <search-history v-else />
    <!-- /搜索历史记录 -->

  </div>
</template>

<script>
import SearchHistory from './components/search-history'
import SearchResult from './components/search-result'
import SearchSuggest from './components/search-suggest'
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
      isReaultShow: false // 控制搜索结果的展示
    }
  },
  computed: {},
  watch: {},
  methods: {
    onSearch (val) {
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
  .van-search__action {
    color: #fff;
  }
}
</style>
