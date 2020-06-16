<!--  -->
<template>
  <div class='channel-edit'>
    <van-cell :border="false">
      <div slot="title">我的频道</div>
      <van-button type="danger" round plain size="mini">编辑</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        text="文字" />
    </van-grid>
    <!-- 频道推荐 -->
    <van-cell :border="false">
      <div slot="title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        text="文字" />
    </van-grid>
    <!-- /频道推荐 -->
  </div>
</template>

<script>
export default {
  name: 'ChannelEdit',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {}
}
</script>
<style lang='less' scoped>
.channel-edit {
  padding: 85px 0;
}
</style>
