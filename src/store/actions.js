// Action 类似于 mutation，不同在于
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// Action 不能做数据处理
import request from '../utils/request'
import * as types from './types'


export default {
  /*----User------*/
  async getUserDetail({commit, state}, params = {}) {
    const res = await request('/t/base/user/getxcxdetail', { userId: state.userId }, 'POST')     //  wx API 接受一个wx :userId , 返回用户详细信息
    const data = res.data
    // console.log('data====', data)
    // 把当前Item 备份起来
    commit(types.SET_ITEM, data)
  },


  async getOpenId({commit, state}, params = {}) {
    const res = await request('/wx/getxcxopenid1', params)     //  wx API 接受一个wx :code , 返回openId
    const data = res.data
    // 把当前openId 备份起来
    commit(types.SET_OPENID, data.xcxopenId);

    // 把当前userId 备份起来
    commit(types.SET_USERID, data.userId);

    // 把当前status 备份起来
    commit(types.SET_STATUS, data.status);

    // 把当前Item 备份起来
    commit(types.SET_TEL, data.tel)


  },




  /*----Video------*/
  setVUserId({commit, state}, params = {}){
    // 把当前vUserId 备份起来
    commit(types.SET_VUSERID, params.vUserId)
  },

}
