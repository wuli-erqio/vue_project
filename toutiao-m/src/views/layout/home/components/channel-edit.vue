<!--  -->
<template>
  <div class='channel-edit'>
    <van-cell :border="false">
      <div slot="title" class="title-text">我的频道</div>
      <van-button @click="isEdit=!isEdit" type="danger" class="edit-btn" round plain size="mini">{{ isEdit ? '完成' : '编辑' }}</van-button>
    </van-cell>
    <van-grid class="my-grid" :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="(channel, index) in myChannels"
        :key="index"
        @click="onMyChannelClck(channel, index)">
        <!-- v-bind:class语法
            一个对象，对象中的key表示要作用的css类名
                    对象中的value要计算出布尔值
                    true,则作用该类名
                    false，不作用类名
        -->
        <van-icon
          v-show="isEdit && !fiexdChannels.includes(channel.id)"
          slot="icon"
          name="clear"
          ></van-icon>
        <span
          class="text"
          slot="text"
          :class="{ active: index === active }"
        >{{ channel.name }}</span>
      </van-grid-item>
    </van-grid>
    <!-- 频道推荐 -->
    <van-cell :border="false">
      <div slot="title" class="title-text">频道推荐</div>
    </van-cell>
    <van-grid class="recommend-grid" :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="(channel, index) in recommandChannels"
        :key="index"
        icon="plus"
        :text="channel.name"
        @click="onAddChannel(channel)" />
    </van-grid>
    <!-- /频道推荐 -->
  </div>
</template>

<script>
import { getAllChannels, deleteUserChannel } from '@/api/channel'
import { setItem } from '@/utils/storage'
// import { mapState } from 'vuex'
export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    myChannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: [],
      isEdit: false,
      fiexdChannels: [0] // 固定频道，不允许删除
    }
  },
  // 计算属性会观测内部依赖数据的变化
  // 如果依赖的数据发生变化，则计算苏醒会重新执行
  computed: {
    // recommandChannels () {
    //   const channels = []
    //   this.allChannels.forEach(channel => {
    //     // find 遍历数组，找到满足条件的元素
    //     const ret = this.myChannels.find(myChannel => {
    //       return myChannel.id === channel.id
    //     })
    //     // 如果我的评到中不包括该频道项
    //     if (!ret) {
    //       channels.push(channel)
    //     }
    //   })
    //   // 把计算结果返回
    //   return channels
    // }
    recommandChannels () {
      // 数组是filter方法，遍历数组，把符合条件的元素存储到新数组
      return this.allChannels.filter(channel => {
        // 数组的find方法：遍历数组，把符合条件的第一个元素返回
        return !this.myChannels.find(myChannel => myChannel.id === channel.id)
      })
    }
  },
  watch: {},
  methods: {
    async loadAllChannels () {
      try {
        const { data } = await getAllChannels()
        this.allChannels = data.data.channels
      } catch (err) {
        this.$toast('数据获取失败')
      }
    },
    onAddChannel (channel) {
      this.myChannels.push(channel)
    },
    onMyChannelClck (channel, index) {
      if (this.isEdit) {
        // 1.如果是固定频道，不要删除
        if (this.fiexdChannels.includes(channel.id)) {
          return
        }

        // 2.删除频道项
        this.myChannels.splice(index, 1)

        // 3. 如果删除的激活频道之前的频道，则更新激活的频道项
        // 参数1：要删除的元素的索引
        // 参数2： 删除个数，如果不指定，则从指定参数1开始一直删除
        if (index <= this.active) {
          // 让激活频道的索引 -1
          this.$emit('updata-active', this.active - 1, true)
        }

        // 4. 处理持久化
        this.deleteChannel(channel)
      } else {
        // 非编辑状态，执行切换频道
        this.$emit('updata-active', index, false)
      }
    },

    async deleteChannel (channel) {
      try {
        if (this.user) {
          // 已登录，则将数据更新到线上
          await deleteUserChannel(channel.id)
        } else {
          // 未登录，将数据跟新到本地
          setItem('TOUTIAO_CHANNELS', this.myChannels)
        }
      } catch (err) {
        this.$toast('操作失败，请稍后重试')
      }
    }
  },
  created () {
    this.loadAllChannels()
  }
}
</script>
<style lang='less' scoped>
.channel-edit {
  padding: 85px 0;
  .title-text {
    font-size: 32px;
    color: #333;
  }
  .edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
    color: #f85959;
    border: 1px solid #f85959;
  }
  /deep/.grid-item {
    width: 160px;
    height: 86px;
    .van-grid-item__content {
      background-color: #f4f5f6;
      white-space: nowrap;
      .van-grid-item__text, .text {
        font-size: 28px;
        color: #222;
        margin-top: 0;
      }
      .active {
        color: red;
      }
      .van-grid-item__icon-wrapper {
        position: unset;
      }
    }
  }
  /deep/ .my-grid {
    .grid-item {
      .van-icon-clear {
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 30px;
        color: #ccc;
        z-index: 2;
      }
    }
  }
  /deep/.recommend-grid {
    .grid-item {
      .van-grid-item__content {
        flex-direction: row;
        .van-icon-plus {
          font-size: 28px;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
