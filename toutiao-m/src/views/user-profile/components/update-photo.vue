<!--  -->
<template>
  <div class="update-photo">
    <img class="img" :src="img" ref="img"/>
    <div class="toolbar">
      <div class="cancel" @click="$emit('close')">取消</div>
      <div class="confirm" @click="onConfirm">完成</div>
    </div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { updateUserPhoto } from '@/api/user'
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
    return {
      cropper: null
    }
  },
  computed: {},
  watch: {},
  methods: {
    onConfirm () {
      // 基于服务端的裁切使用getData() 方法获取参数
      // console.log(this.cropper.getData())
      // 纯客户端的裁切使用 getCroppedCanvas() 获取裁切的文件对象
      this.cropper.getCroppedCanvas().toBlob(blob => {
        this.updataUserPhoto(blob)
      })
    },
    async updataUserPhoto (blob) {
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true, // 禁止背景点击
        duration: 0 // 持续展示
      })
      try {
        // 如果接口要求 Content-Type 是 application/json
        // 则传递普通 javaScript 对象
        // updateUserPhoto({
        //   photo: blob
        // })
        // 如果接口要求 Content-Type 是 multipart/form-data
        // 则必须传递 FormData 对象
        const formData = new FormData()
        formData.append('photo', blob)

        const { data } = await updateUserPhoto(formData)
        // 关闭弹出层
        this.$emit('close')
        // 更新视图
        this.$emit('updata-photo', data.data.photo)
        this.$toast.fail('更新成功')
      } catch (error) {
        this.$toast.fail('更新失败')
      }
    }
  },
  created () {},
  mounted () {
    const image = this.$refs.img
    this.cropper = new Cropper(image, {
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
      // autoCropArea: 1,
      // 画布移动
      cropBoxMovable: false,
      // 截图区域的缩放
      cropBoxResizable: false,
      // 背景
      background: false,
      // 画布是否可以移动，默认可以
      movable: true
    })
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
