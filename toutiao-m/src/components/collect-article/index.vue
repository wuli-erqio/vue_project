<!--  -->
<template>
  <van-icon
    :name="value ? 'star' : 'star-o'"
    :color="value ? '#ffa500' : ''"
  />
</template>

<script>
export default {
  name: 'CollectArticle',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
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
