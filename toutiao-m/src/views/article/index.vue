<template>
  <div class='article-container'>
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar"
      left-arrow title="力创"
      @click-left="$router.back()"></van-nav-bar>
    <div class="main-warp">
      <!-- 加载中 -->
      <div v-if="loading" class="loading-warp">
        <van-loading color="#3296fa" vertical>
          加载中
        </van-loading>
      </div>
      <!-- 加载完成-文章详情 -->
      <div v-else-if="article.title" class="article-detail">
        <!-- 文章标题 -->
        <h1 class="article-title">{{article.title}}</h1>
        <!-- 用户信息 -->
        <van-cell class="user-info" center :border="false">
          <van-image
            class="avatar"
            slot="icon"
            round
            fit="cover"
            :src="article.aut_photo"
          />
          <div slot="title" class="user-name">{{ article.aut_name}}</div>
          <div slot="label" class="publish-date">{{ article.aut_pubdate | relativeTime }}</div>
          <!-- <van-button
            v-if="article.is_followed"
            class="follow-btn"
            round
            size="small"
            :loading="followLoading"
            @click="onFollow"
            >已关注</van-button>
          <van-button
            v-else
            class="follow-btn"
            type="info"
            color="#3296fa"
            round
            size="small"
            icon="plus"
            :loading="followLoading"
            @click="onFollow"
            >关注</van-button> -->
            <!--
              模板中的 $event是事件参数
              当我们传递给子组件的数据既要使用还要修改
                传递props
                  :is-followed="article.is_followed"
                修改：自定义事件
                  @update-is_followed="article.is_followed = $event"
              简写方式：在组件使用 v-model
                value="article.is_followed"
                @input="article.is_followed = $event"
              如果需要修改v-model的规则名称，可以通过子组件的model修改

              一个组件只能使用一次v-model
              如果有多个数据需要实现类似于v-model的效果，怎么办？
              可以使用属性的 .sync修饰符。
            -->
            <follow-user
              v-model="article.is_followed"
              :user-id="article.aut_id"
              class="follow-btn"
            ></follow-user>
        </van-cell>
        <!-- 文章内容 -->
        <div
          class="article-content markdown-body"
          v-html="article.content"
          ref="article-content"
        ></div>
        <van-divider>正文结束</van-divider>
        <!-- 文章评论列表 -->
        <comment-list />
        <!-- 底部区域 -->
        <div class="article-bottom">
          <van-button
            class="comment-btn"
            type="default"
            round
            size="small"
          >写评论</van-button>
          <van-icon
            name="comment-o"
            info="123"
            color="#777"
          />
          <collect-article
            v-model="article.is_collected"
            :article-id="article.art_id"
            class="btn-item"
          />
          <like-article v-model="article.attitude" :article-id="article.art_id"/>
          <van-icon name="share" color="#777777"></van-icon>
        </div>
      </div>
      <!-- 加载失败: 404 -->
      <div v-else-if="errStatus === 404" class="error-wrap">
        <van-icon name="failure"></van-icon>
        <p class="text">该资源不存在或已删除!</p>
      </div>
      <!-- 加载失败:其他未知错误(例如:网络原因或服务器异常) -->
      <div v-else class="error-wrap">
        <van-icon name="failure"></van-icon>
        <p class="text">内容加载失败!</p>
        <van-button class="retry-btn" @click="loadArticle">点击重试</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleByID } from '@/api/article'
import { ImagePreview } from 'vant'
import FollowUser from '@/components/follow-user'
import CollectArticle from '@/components/collect-article'
import LikeArticle from '@/components/like-article'
import CommentList from './components/comment-list'

export default {
  name: 'ArticleIndex',
  components: {
    FollowUser,
    CollectArticle,
    LikeArticle,
    CommentList
  },
  props: {
    articleId: {
      type: [Number, String, Object],
      required: true,
      errStatus: 0 // 失败的状态码
    }
  },
  data () {
    return {
      article: {}, // 文章详情
      loading: true, // 加载中的loading状态
      followLoading: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    async loadArticle () {
      this.loading = true
      try {
        const { data } = await getArticleByID(this.articleId)
        this.article = data.data

        // 初始化图片,点击预览
        // this.$refs['article-content']
        setTimeout(() => {
          this.previewImage()
        }, 0)
        // 请求成功, 关闭 loading
        // this.loading = false
      } catch (err) {
        if (err.response && err.response.status === 404) {
          this.errStatus = 404
        }
      }
      // 无论成功还是失败都要关闭loading
      this.loading = false
    },
    previewImage () {
      const articleContent = this.$refs['article-content']
      const imgs = articleContent.querySelectorAll('img')
      const images = []
      imgs.forEach((img, index) => {
        images.push(img.src)
        img.onclick = () => {
          ImagePreview({
            // 预览的图片地址数组
            images,
            // 起始位置,从0开始
            startPosition: index
          })
        }
      })
    }
  },
  created () {
    this.loadArticle()
  },
  mounted () {}
}
</script>
<style lang='less' scoped>
@import "./github-markdown.css";
.article-container {
  .main-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 92px;
    bottom: 88px;
    overflow-y: scroll;
    background-color: #fff;
  }
  .article-detail {
    .article-title {
      font-size: 40px;
      padding: 50px 32px;
      margin: 0;
      color: #3a3a3a;
    }

    .user-info {
      padding: 0 32px;
      .avatar {
        width: 70px;
        height: 70px;
        margin-right: 17px;
      }
      .van-cell__label {
        margin-top: 0;
      }
      .user-name {
        font-size: 24px;
        color: #3a3a3a;
      }
      .publish-date {
        font-size: 23px;
        color: #b7b7b7;
      }
      .follow-btn {
        width: 170px;
        height: 58px;
      }
    }

    .article-content {
      padding: 55px 32px;
      /deep/ p {
        text-align: justify;
      }
    }
  }

  .loading-wrap {
    padding: 200px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .error-wrap {
    padding: 200px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    .van-icon {
      font-size: 122px;
      color: #b4b4b4;
    }
    .text {
      font-size: 30px;
      color: #666666;
      margin: 33px 0 46px;
    }
    .retry-btn {
      width: 280px;
      height: 70px;
      line-height: 70px;
      border: 1px solid #c3c3c3;
      font-size: 30px;
      color: #666666;
    }
  }

  .article-bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    height: 88px;
    border-top: 1px solid #d8d8d8;
    background-color: #fff;
    .comment-btn {
      width: 282px;
      height: 46px;
      border: 2px solid #eeeeee;
      font-size: 30px;
      line-height: 46px;
      color: #a7a7a7;
    }
    /deep/.van-icon {
      font-size: 40px;
      .van-info {
        font-size: 16px;
        background-color: #e22829;
      }
    }
  }
}
</style>
