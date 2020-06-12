<template>
  <div class='profile-container'>
    <!-- 头部已登录 -->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <van-image
          class="avatar"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span class="user-center">力创头条号</span>
        <van-button size="mini" round>编辑资料</van-button>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <!-- /头部已登录 -->

    <!-- 头部未登录 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- /头部未登录 -->

    <!-- 导航 -->
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>
    <!-- /导航 -->
    <van-cell title="消息通知" is-link />
    <van-cell class="mb-9" title="小智同学" is-link />
    <van-cell v-if="user" clickable @click="onLogout" class="logout-cell" title="退出登录" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  methods: {
    onLogout () {
      // 退出提示
      // 在组件中要使用 this.$dialog 来调用弹框组件
      this.$dialog.confirm({
        title: '确认退出吗？'
      })
        .then(() => {
          // 确认退出： 清除登陆状态（容器中的user + 本地存储中的状态）
          this.$store.commit('setUser', null)
        })
        .catch(() => {})
    }
  },
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
.profile-container {
  .header {
    height: 361px;
    background: url("~@/assets/banner.png");
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .user-center {
        flex: 1;
        font-size: 30px;
        color: #fff;
      }
      .avatar {
        width: 132px;
        height: 132px;
        border: 4px solid #fff;
        margin-right: 23px;
      }
    }
    .data-stats {
      display: flex;
      align-items: center;
      .data-item {
        flex: 1;
        height: 130px;
        display: flex;
        color: #fff;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
  .grid-nav {
    margin-bottom: 9px;
    .grid-item {
      height: 141px;
      i.toutiao {
        font-size: 45px;
      }
      .toutiao-shoucang {
        color: #ec5b5c;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 28px;
      }
    }
  }
  .mb-9 {
    margin-bottom: 9px;
  }
  .logout-cell {
    text-align: center;
    color: #d86262;
  }
}
</style>
