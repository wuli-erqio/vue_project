<template>
  <div class='user-profile'>
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="个人中心"
      left-arrow
      @click-left="$router.back()"
    />
    <input
      type="file"
      hidden
      ref="file"
      @change="onFileChange">
    <!-- 个人信息 -->
    <van-cell title="头像" is-link>
      <van-image
        class="avatar"
        fit="cover"
        round
        :src="user.photo"
        @click="$refs.file.click()"></van-image>
    </van-cell>
    <van-cell
      title="昵称"
      :value="user.name"
      is-link
      @click="isUpdataNameShow = true"></van-cell>
    <van-cell
      title="性别"
      :value="user.gender === 0 ? '男': '女'"
      is-link
      @click="isUpdateGenderShow = true"></van-cell>
    <van-cell
      title="生日"
      :value="user.birthday"
      is-link
      @click="isUpdateBirthdayShow = true"></van-cell>
    <!-- 编辑昵称 -->
    <van-popup
      v-model="isUpdataNameShow"
      style="height: 100%"
      position="bottom"
    >
      <update-name v-if="isUpdataNameShow" v-model="user.name" @close="isUpdataNameShow = false" />
    </van-popup>
    <!-- 编辑性别 -->
    <van-popup
      v-model="isUpdateGenderShow"
      position="bottom">
      <update-gender
        v-if="isUpdateGenderShow"
        @close="isUpdateGenderShow=false"
        v-model="user.gender"/>
    </van-popup>
    <!-- 编辑生日 -->
    <van-popup
      v-model="isUpdateBirthdayShow"
      position="bottom">
      <update-birthday
        v-if="isUpdateBirthdayShow"
        @close="isUpdateBirthdayShow=false"
        v-model="user.birthday"/>
    </van-popup>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'
import UpdateName from './components/update-name'
import UpdateGender from './components/update-gender'
import UpdateBirthday from './components/update-birthday'
export default {
  name: 'UserProfile',
  components: {
    UpdateName,
    UpdateGender,
    UpdateBirthday
  },
  props: {},
  data () {
    return {
      user: {},
      isUpdataNameShow: false,
      isUpdateGenderShow: false,
      isUpdateBirthdayShow: false
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
    },
    onFileChange () {
      // 获取文件队形
      const file = this.$refs.file.files[0]
      // 基于文章对象获取blob对象
      const data = window.URL.createObjectURL(file)
      console.log(data)
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
