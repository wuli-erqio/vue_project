<!--  -->
<template>
  <div class='update-name'>
    <!-- 导航栏 -->
    <van-nav-bar
      title="设置昵称"
      left-text="取消"
      right-text="完成"
      @click-left="$emit('colse')"
    />
    <!-- 输入框 -->
    <div class="field-wrap">
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="7"
        placeholder="请输入昵称"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateName',
  components: {},
  props: {},
  data () {
    return {
      message: ''
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {}
}
</script>
<style lang='less' scoped>
.update-name {
  .field-wrap {
    padding: 20px;
  }
}
</style>
