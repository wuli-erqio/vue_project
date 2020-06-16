<template>
  <div class='user-profile'>
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="个人中心"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 个人信息 -->
    <van-cell title="头像" is-link>
      <van-image
        class="avatar"
        fit="cover"
        round
        src="https://img.yzcdn.cn/vant/cat.jpeg"></van-image>
    </van-cell>
    <van-cell title="昵称" value="" is-link></van-cell>
    <van-cell title="性别" value="" is-link></van-cell>
    <van-cell title="生日" value="" is-link></van-cell>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
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
.user-profile {
  .avatar {
    width: 60px;
    height: 60px;
  }
}
</style>
