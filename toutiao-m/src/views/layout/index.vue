<template>
  <div class='layout-container'>
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 标签导航栏 -->
    <!--
      route 开启路由模式
      to 对应的路由
      v-model 开启路由模式，这个就不需要了
      -->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/">
        <i slot="icon" class="toutiao toutiao-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to='/qa'>
        <i slot="icon" class="toutiao toutiao-wenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item to='/video'>
        <i slot="icon" class="toutiao toutiao-shipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item to='/profile'>
        <i slot="icon" class="toutiao toutiao-wode"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {}
}
</script>
<style lang='less' scoped>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-style: 20px;
    }
  }
}
</style>
