<template>
  <div id="app">
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <!-- 路由出口 -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less"></style>
