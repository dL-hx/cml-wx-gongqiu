import cml from 'chameleon-api'
import urlConfig from "./urlConfig";


// const app = getApp()

// 封装一个通用的request函数，用于发送微信小程序的ajax请求
// 要求：支持promise
function request(path, data, method = 'GET', domain = urlConfig.domain) {
  return new Promise((resolve, reject) => {
    cml.request({
      domain: domain,
      url: path,
      data: data,
      method: method
    }).then(res => {
      if (res.success||res.code){
        resolve(res)
      }
    }).catch(err => {
      reject(err)
    });
  })
}

// 把request函数导出去
export default request;