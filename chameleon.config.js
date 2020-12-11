// 设置api请求前缀
// const apiPrefix = 'http://192.168.2.126/dev';
const apiPrefix = 'https://admin.xuegege.info/dev';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["wx"],
  buildInfo: {
    wxAppId: 'wxc6245314befe88ee'
  },

  check: {
    enable: true,
    enableTypes: ["Object","Array","Nullable"]
  },

  // 如果觉得校验影响开发体验，可以通过以下配置关闭校验
  enableLinter: false,

  wx: {
    dev: {
      apiPrefix,
    },
    build: {

      apiPrefix
    }
  }

})



