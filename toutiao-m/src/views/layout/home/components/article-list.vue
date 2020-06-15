<!-- 文章列表组件 -->
<template>
  <div class='article-list'>
    <van-pull-refresh v-model="isreFreshLoading" :success-duration="1500" :success-text="reFreshSuccessText" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
      >
        <van-cell v-for="(article, index) in list" :key="index" :title="article.title" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
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
      finished: false, // 控制数据加载结束状态
      timestamp: null,
      error: false,
      isreFreshLoading: false, // 控制下拉刷新的状态
      reFreshSuccessText: '刷新成功' // 下拉刷新成功提示文本
    }
  },
  computed: {},
  watch: {},
  methods: {
    async onLoad () {
      try {
        // 1.请求获取数组
        const { data } = await getArticles({
          channel_id: this.channel.id, // 频道id
          // 简单理解就是请求的数据页码
          // 请求第一页数据：当前最新时间戳
          // 用于请求之后的时间戳会在当前请求结果中返回给你
          timestamp: this.timestamp || Date.now(),
          // 是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
          with_top: 1
        })
        // 2.把请求结果数据添加到list数组中
        const { results } = data.data
        // 数组的展开操作符，他会把数组元素一个一个拿出来
        this.list.push(...results)
        // 3.本次数据加载结束之后要把加载状态设置为结束
        // loading 关闭以后才能触发下一次的加载更多
        this.loading = false

        // 模拟随机失败的情况
        // if (Math.random() > 0.5) {
        //   JSON.parse('jcbwuuvivi')
        // }

        // 4.判断数据是否全部加载完成
        if (results.length) {
          // 更新获取下一页数据的时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 没有数据了，finished 设置为true, 之后不在触发加载更多
          this.finished = true
        }
      } catch (err) {
        this.error = true
        // 请求失败，loading也要关闭
        this.loading = false
      }
    },
    // 当下拉刷新触发该方法
    async onRefresh () {
      // 1.请求获取数据
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now(),
          with_top: 1
        })
        // 2.将数据追加到列表的顶部
        const { results } = data.data
        this.list.unshift(...results)
        // 3.关闭下拉刷新的 loading 状态
        this.isreFreshLoading = false
        // 更新下拉刷新成功展示的文本
        this.reFreshSuccessText = `刷新成功，更新了${results.length}条数据`
      } catch (err) {
        this.reFreshSuccessText = '刷新失败'
        this.isreFreshLoading = false
      }
    }
  },
  created () {}
}
</script>
<style lang='less' scoped>
.article-list {
  height: 79vh;
  overflow-y: auto;
}
</style>
