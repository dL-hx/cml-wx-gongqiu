baseUrl: http://192.168.2.126/dev
or
baseUrl: http://192.168.2.128/dev


## gxj-xa-wx 接口文档
> http://192.168.2.126/dev/swagger-ui.html#/企业基本情况/listUsingGET

> http://192.168.2.128/dev/swagger-ui.html#/企业基本情况/listUsingGET

## 供需资讯接口
> http://apidocserver.wiimedia.top/apidoc?file=data.svg
>
### 通知公告
> http://zx.wiimedia.cn/api/getNewsByType1?pageSize=10&pageNow=1&tag=工信局通知公告

### 工作动态
> http://zx.wiimedia.cn/api/getNewsByType1?pageSize=10&pageNow=1&tag=工信局工作动态

### 清除用户的信息
http://192.168.2.126/dev/t/base/user/delete
GET 
{
userId: userId
}



npm install
npm start