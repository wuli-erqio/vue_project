<!--  -->
<template>
  <div class='login-container'>
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        name="用户名"
        placeholder="请输入手机号"
      />
      <van-field
        type="password"
        name="密码"
        placeholder="请输入验证码"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
// @import url(); 引入公共css类
</style>
