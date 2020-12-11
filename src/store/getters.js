export default {
  /*----User------*/
  getGlobalUserId(state){
    return {
      userId: state.userId
    }
  },

  getGlobalStatus(state){
    return {
      status: state.status
    }
  },

  getGlobalItem(state){
    return state.item
  },

  getGlobalTel(state){
    console.log('state', state.tel)
    return {
      tel: state.tel
    }
  },

  getGlobalOpenId(state){
    return {
      xcxOpenId: state.openId
    }
  },

  getGlobalConnect(state){
    return state.hasConnect
  },

  /*----Video------*/
  getGlobalVUserId(state){
    return {
      vuserId: state.vUserId
    }
  }
}
