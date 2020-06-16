/**
 * 频道请求模块
*/

import request from '@/utils/request'

/**
 * 获取所有频道列表
 */

export const getAllChannels = () => {
  return request({
    url: '/app/v1_0/channels',
    method: 'GET'
  })
}

/**
 * 添加用户指定频道
 */

export const addUserChannel = channels => {
  return request({
    url: '/app/v1_0/user/channels',
    method: 'PATCH',
    data: {
      channels: [channels]
    }
  })
}

/**
 * 删除用户指定频道
 */

export const deleteUserChannel = channelID => {
  return request({
    url: `/app/v1_0/user/channels/${channelID}`,
    method: 'DELETE'
  })
}
