<!-- 文章列表组件 -->
<template>
  <div class='article-list'>
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
      error: false
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
    }
  },
  created () {}
}
</script>
<style lang='less' scoped>
</style>
