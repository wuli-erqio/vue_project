<template>
  <van-button
    v-if="isFollowed"
    class="follow-btn"
    round
    size="small"
    :loading="loading"
    @click="onFollow"
    >已关注</van-button>
  <van-button
    v-else
    class="follow-btn"
    type="info"
    color="#3296fa"
    round
    size="small"
    icon="plus"
    :loading="loading"
    @click="onFollow"
    >关注</van-button>
</template>

<script>
import { addFollow, deleteFollow } from '@/api/user'
export default {
  name: 'FollowIndex',
  components: {},
  // 自定义v-model的数据名称
  model: {
    prop: 'isFollowed', // 默认是value
    event: 'update-is_followed' // 默认是input
  },
  props: {
    isFollowed: {
      type: Boolean,
      required: true
    },
    userId: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async onFollow () {
      // 展示loading
      this.loading = true
      try {
        if (this.isFollowed) {
          await deleteFollow(this.userId)
        } else {
          await addFollow(this.userId)
        }
        // 更新视图
        // this.article.is_followed = !this.article.is_followed
        // this.$emit('update-is_followed', !this.value)
        this.$emit('update-is_followed', !this.isFollowed)
        // this.$emit('input', !this.isFollowed)
      } catch (error) {
        let message = '操作失败，请重试!'
        if (error.response && error.response.status === 400) {
          message = '你不能关注你自己！'
        }
        this.$toast(message)
      }
      // 关闭关注按钮的loading
      this.loading = false
    }
  }
}
</script>
<style lang='less' scoped>
</style>
