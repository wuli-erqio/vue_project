<!-- 只有List在可视范围内才会检查滚动位置触发onLoad -->
<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="已显示全部评论"
    @load="onLoad"
    :error="error"
    error-text="加载失败，请点击重试"
    :immediate-check="false"
    >
    <comment-item
      v-for="(item, index) in list"
      :key="index"
      :comment="item"
      @reply-click="$emit('reply-click', $event)"
    />
  </van-list>
</template>

<script>
import { getComments } from '@/api/comment'
import CommentItem from './comment-item'
export default {
  name: 'CommentList',
  components: {
    CommentItem
  },
  props: {
    source: {
      type: [Number, String, Object],
      required: true
    },
    list: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'a',
      // 自定义prop数据验证
      validator (value) {
        return ['a', 'c'].includes(value)
      }
    }
  },
  data () {
    return {
      // list: [],
      loading: false,
      error: false,
      finished: false,
      offset: null, // 获取下一页标记
      limit: 10
    }
  },
  created () {
    // 当你手动初始onload的话，他不会自动开始初始化的loading
    // 所以我们要自己手动的开启loading
    this.loading = true
    this.onLoad()
  },
  methods: {
    async onLoad () {
      // 1.请求数据
      try {
        const { data } = await getComments({
          type: this.type, // 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
          source: this.source.toString(), // 源id，文章id或评论id
          offset: this.offset, // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
          limit: this.limit // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
        })
        // 2.将数据添加到列表
        const { results } = data.data

        this.list.push(...results)

        // 把文章评论的总数传递到外部
        this.$emit('onload-success', data.data)
        // 3.将loading设置为false
        this.loading = false
        // 4.判断是否还有数据
        if (results.length) {
          // 有，更新
          this.offset = data.data.last_id
        } else {
          // 无， finished设置结束
          this.finished = true
        }
      } catch (error) {
        this.error = true
        this.loading = false
      }
    }
  }
}
</script>
<style lang='less' scoped>
</style>
