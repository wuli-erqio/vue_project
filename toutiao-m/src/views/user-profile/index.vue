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
        :src="user.photo"></van-image>
    </van-cell>
    <van-cell
      title="昵称"
      :value="user.name"
      is-link
      @click="isUpdataNameShow = true"></van-cell>
    <van-cell title="性别" :value="user.gender === 0 ? '男': '女'" is-link></van-cell>
    <van-cell title="生日" :value="user.birthday" is-link></van-cell>
    <!-- 编辑昵称 -->
    <van-popup
      v-model="isUpdataNameShow"
      style="height: 100%"
      position="bottom"
    >
      <update-name @colse="isUpdataNameShow = false" />
    </van-popup>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'
import UpdateName from './components/update-name'
export default {
  name: 'UserProfile',
  components: {
    UpdateName
  },
  props: {},
  data () {
    return {
      user: {},
      isUpdataNameShow: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    async loadUserProfile () {
      try {
        const { data } = await getUserProfile()
        this.user = data.data
      } catch (error) {
        this.$toast('数据获取失败')
      }
    }
  },
  created () {
    this.loadUserProfile()
  }
}
</script>
<style lang='less' scoped>
.user-profile {
  .avatar {
    width: 60px;
    height: 60px;
  }
  .van-popup {
    background-color: #f5f7f9;
  }
}
</style>
