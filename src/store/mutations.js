// 在 CML 内置 store 中，mutation 都是同步事务
// mutation里更新Store里的state

// mutation应该是个纯函数，即只要传入相同的参数，每次都应返回相同的结果。
//
// 不要把和处理数据无关的代码放在mutation里，
// 让Reducer保持纯净，只是单纯地执行计算。
import * as types from './types'

export default {
  /*----User------*/
  [types.SET_OPENID](state, value) {
    state.openId = value
  },

  [types.SET_USERID](state, value) {
    state.userId = value
  },

  [types.SET_STATUS](state, value) {
    state.status = value
  },

  [types.SET_TEL](state, value) {
    state.tel = value
  },

  [types.SET_ITEM](state, value) {
    state.item = value
  },

  /*----Video------*/
  [types.SET_VUSERID](state, value) {
    state.vUserId = value
  },
}
