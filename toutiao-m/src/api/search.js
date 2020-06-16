/**
 * 文章相关请求模块
 */
import request from '@/utils/request'

/**
 * 请求获取文章列表数据
 */
export const getSearchSuggestions = q => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}
