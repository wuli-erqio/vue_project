<!-- 文章列表组件 -->
<template>
  <div class='article-list'>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  components: {},
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制加载中loading状态
      finished: false // 控制数据加载结束状态
    }
  },
  computed: {},
  watch: {},
  methods: {
    onLoad () {
      // 1.请求获取数组
      setTimeout(() => {
        // 2.把请求结果数据添加到list数组中
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 3.本次数据加载结束之后要把加载状态设置为结束
        // loading 关闭以后才能触发下一次的加载更多
        this.loading = false

        // 4.判断数据是否全部加载完成
        if (this.list.length >= 40) {
          // finished 设置为true, 之后不在触发加载更多
          this.finished = true
        }
      }, 1000)
    }
  },
  created () {}
}
</script>
<style lang='less' scoped>
</style>
