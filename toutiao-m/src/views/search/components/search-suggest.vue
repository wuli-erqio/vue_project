<!--  -->
<template>
  <div class='search-suggest'>
    <van-cell title="hello" icon="search"></van-cell>
    <van-cell title="hello" icon="search"></van-cell>
    <van-cell title="hello" icon="search"></van-cell>
    <van-cell title="hello" icon="search"></van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchSuggest',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {
    searchText: {
      // 当searchText发生改变的时候，就会调用handler函数
      // 注意：handler函数名称是固定的
      handler (value) {
        console.log(value)
      },
      // 该回调将会在侦听开始之后被立即调用
      immediate: true
    }
  },
  methods: {},
  created () {}
}
</script>
<style lang='less' scoped>
</style>
