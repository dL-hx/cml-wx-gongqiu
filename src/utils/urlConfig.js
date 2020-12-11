/**
 * 本地地址
 */
const serverLocal = {
   domain: "http://192.168.2.126/dev",
  // domain: "http://192.168.2.79/dev",
}

/**
 * 测试地址
 */
const serverTest = {
  domain:"https://admin.xuegege.info/dev",
}

/**
 * 正式地址
 */
const serverOffic = {
  domain:"https://gongxu.wiimedia.top/dev",
}


export default {
    // ...serverTest,

  // ...serverLocal,
   ...serverOffic,


  imgDomain:"https://gongxu.wiimedia.top/dev",

  newsDomain:"https://gongxu.wiimedia.top/dev"

}