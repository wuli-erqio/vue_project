module.exports = {
  // 配置要使用的PostCSS插件
  plugins: {
    // 配置使用autoprefixer插件
    // 作用：生成浏览器CSS样式前缀
    // VueCLI内部已经配置了autoprefixer插件
    // 所以有配置了一次，产生冲突
    // autoprefixer: {
      // 配置要兼容到的环境信息
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 配置使用postcss-pxtorem插件
    // 把px转换成rem
    'postcss-pxtorem': {
      // lib-dlexible的rem适配方案，把每份分成10分，每一份就是十分之一
      // 所以 rootValue应该设置为你的设计稿宽度的十分之一
      // 我们的设计稿一般是750，所以应该设置为750/10=75
      // 但是vant建议设置为37.5，为什么？因为vant是基于375的设计稿
      // 所以必须设置为37.5，唯一的缺点就是使用我们的设计稿的尺寸都必须除以2
      // 有什么更好的办法
      // 如果是vant 的样式，就按照37.5来转换
      // 如果是我们自家的样式，就按75来转换
      // 通过查阅文档，我们发现root Value支持两种类型
      // 数字：固定的数值
      // 函数：可以动态处理返回值
      //       posscss-pxtorem处理每个CSS文件的时候都会来调用这个函数
      //       他会把被处理的css文件相关信息通过参数传递给该函数
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // rootValue: 37.5,

      // 配置要转换的属性
      // * 表示所有
      propList: ['*'],
      // 配置不要转换的样式资源
      exclude: 'github-markdown'
    }
  }
}