<!--  -->
<template>
  <van-icon
    :name="value ? 'star' : 'star-o'"
    :color="value ? '#ffa500' : ''"
    @click="onCollect"
    :loading="loading"
  />
</template>

<script>
import { addCollect, deleteCollect } from '@/api/article'
export default {
  name: 'CollectArticle',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    articleId: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    async onCollect () {
      this.loading = true
      try {
        if (this.value) {
          await deleteCollect(this.articleId)
        } else {
          await addCollect(this.articleId)
        }
        this.$emit('input', !this.value)
        this.$toast.success(this.value ? '收藏成功' : '取消收藏')
      } catch (error) {
        this.$toast('收藏失败！')
      }
      this.loading = false
    }
  }
}
</script>
<style lang='less' scoped>
.collected {
  .van-icon {
    color: #ffa500;
  }
}
</style>
