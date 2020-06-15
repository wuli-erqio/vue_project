<template>
  <van-cell
    class="article-item">
    <div slot="title" class="title">{{ article.title }}</div>
    <div slot="label" class="">
      <div v-if="article.cover.type === 3" class="cover-wrap">
        <div class="cover-item" v-for="(img, index) in article.cover.images" :key="index">
          <van-image
          width="100"
          height="100"
          :src="img" />
        </div>
        <div class="cover-item"></div>
        <div class="cover-item"></div>
      </div>
      <div>
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }}评论</span>
        <span>{{ article.pubdate }}</span>
      </div>
    </div>
    <van-image
      v-if="article.cover.type === 1"
      slot="default"
      width="100"
      height="100"
      :src="article.cover.images[0]" />
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      article: Object,
      require: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang='less' scoped>
</style>
