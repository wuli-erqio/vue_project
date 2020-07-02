<template>
  <div class='comment-replay'>
    <van-nav-bar
      :title="comment.reply_count > 0 ? `${comment.reply_count}条回复` : '暂无回复'"
    >
      <van-icon
        slot="left"
        name="cross"
        @click="$emit('close')"
      />
    </van-nav-bar>
    <!-- 滚动范围 -->
    <div class="scroll-wrap">
      <!-- 当前评论项 -->
      <comment-item :comment="comment"></comment-item>
      <van-cell title="全部回复" />
      <comment-list
        :source="comment.com_id"
        type="c" />
    </div>
      <!-- 底部区域 -->
    <div class="post-warp">
      <van-button @click="isPostShow=true" class="post-btn" size="small" round>写评论</van-button>
    </div>
    <!-- 发布评论 -->
    <van-popup v-model="isPostShow" position="bottom">
      <comment-post :target="comment.com_id" />
    </van-popup>
  </div>
</template>

<script>
import CommentItem from './comment-item'
import CommentList from './comment-list'
import CommentPost from './comment-post'
export default {
  name: 'CommentReply',
  components: {
    CommentItem,
    CommentList,
    CommentPost
  },
  inject: ['articleId'],
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isPostShow: false
    }
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
.scroll-wrap {
  position: fixed;
  top: 92px;
  bottom: 88px;
  left: 0;
  right: 0;
  overflow: auto;
}
.post-warp {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-top: 1px solid #d8d8d8;
  .post-btn {
    width: 60%;
  }
}
</style>
