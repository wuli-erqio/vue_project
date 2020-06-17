<!--  -->
<template>
  <div class="update-photo">
    <img class="img" :src="img" ref="img"/>
    <div class="toolbar">
      <div class="cancel" @click="$emit('close')">取消</div>
      <div class="confirm">完成</div>
    </div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {
  name: 'UpdatePhoto',
  components: {},
  props: {
    img: {
      type: [String, Object],
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {
    const image = this.$refs.img
    const cropper = new Cropper(image, {
      // 定义cropper的查看模式。
      // 如果您将viewMode设置为0，那么裁切框可以扩展到画布之外，
      // 而1、2或3的值将限制裁切框的大小到画布的大小。
      // 视图模式为2或3会额外地将画布限制在容器中。
      // 注意，如果画布和容器的比例相同，那么2和3之间没有区别
      viewMode: 1,
      // 'crop': 鼠标创建一个裁剪框
      // 'move': 只拖动图片
      // 'none': 只拖动裁剪框
      dragMode: 'move',
      // 截图比例，默认19/9
      aspectRatio: 1,
      // 自动截取比例
      autoCropArea: 1,
      // 画布移动
      cropBoxMovable: false,
      // 截图区域的缩放
      cropBoxResizable: false,
      // 背景
      background: false,
      // 画布是否可以移动，默认可以
      movable: true
    })
    console.log(cropper)
  }
}
</script>
<style lang='less' scoped>
.update-photo {
  background-color: #000;
  height: 100%;
  .toolbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    .cancel, .confirm {
      width: 90px;
      height: 90px;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
  .img {
    display: block;
    max-width: 100%;
  }
}
</style>
