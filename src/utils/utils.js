import cml from 'chameleon-api'

/**
* showToast : 展示Toast 信息
*/
function showToast(msg, duration=1000) {
  cml.showToast({
    message: msg,
    duration: duration,
  });
}


/**
 * Object Serialize: 对象序列化方法
*/

function objSerialize(path, params) {
  params = {...params} // wd=111&cb=222

  let arrs = [] // 数组序列化
  for (let key in params) {
    arrs.push(`${key}=${params[key]}`)
  }
  return `${path}?${arrs.join('&')}`
}


/**
 * 处理时间格式到年
 */
function formatDateToYear (date) {
  return typeof date == 'string' && date.split('T')[0];
}

/**
 * 处理日期时间格式
 */
function formatDate(date) {
  if (!date) return '--'

  function appendZero(tmp) {
    return tmp > 9 ? tmp : "0" + tmp;
  }

  if (typeof date == 'number'){ // 时间戳转换成日期对象
    date = new Date(date)
    return date.getFullYear() + '-' + (date.getMonth()>9?date.getMonth() :"0"+(date.getMonth() + 1)) + '-' + appendZero(date.getDate())
      + ' ' + date.getHours() + ':' + appendZero(date.getMinutes()) + ':' + appendZero(date.getSeconds())
  }

  // 将日期时间字符串转换成日期对象
  return typeof date == 'string'&&date.replace('T', ' ')
}


/**
 * 获取当前时间戳
 */
function getCurrentTimeStamp() {
  const timestamp = Date.parse(new Date());
  return timestamp
}


Date.prototype.Format = function (timestamp, fmt) {
  var date = new Date(timestamp - 28800000)
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/**
 * 时间戳转换成指定格式日期
 * eg.dateFormat(11111111111111, 'Y年m月d日 H时i分')
 * → "2322年02月06日 03时45分"
 */
function dateFormat(timestamp,fmt='yyyy-MM-dd HH:mm:ss'){
  return new Date().Format(timestamp,fmt )
}

function trimAllBlank(str){ // 去除字符串中的所有空格
  return str.replace(/\s/g,"");
}

/**
 * 判断一个值是不是空数组
 */
function isEmptyArray(value) {
  return (
    (Array.isArray(value) && value.length === 0) ||
    (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0)
  );
}

/**
 * 保留当前页面，跳转到应用内的某个页面。
 */
function goToPathHandle(path , query={}){
  cml.navigateTo({
    path,
    query
  })
}


/**
 * 关闭当前页面，返回上一页面
 */
function backPathHandle(backPageNum = -1){
  cml.navigateBack(backPageNum)
}

/**
 * decodeURIComponent to Word
 */
function duc2W(str){
 return str&&decodeURIComponent(str)||''
}

/**
 * 校验表单字段验证规则
 */
function checkField(filedName,text) {
  if(filedName.length == 0){ // 检查字段是否为空
    cml.showToast({
      message: '请输入' + text,
      duration: 1000,
    });
    return false;
  }
}

/**
* 校验手机号, 并弹框
*/
function checkPhone(phone) {

  if(!(/^1[3456789]\d{9}$/.test(phone))){
    cml.showToast({
      message: '手机号码有误，请重填',
      duration: 1000,
    });
    return false;
  }

}

/**
 * 校验邮箱格式, 并弹框
 */
function checkEmail(email) {
  if(!(/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(email))){
    cml.showToast({
      message: '邮箱格式有误，请重填',
      duration: 1000,
    });
    return false;
  }
}


export {
  formatDate,
  formatDateToYear,
  trimAllBlank,
  isEmptyArray,
  goToPathHandle,
  backPathHandle,
  checkField,
  checkPhone,
  checkEmail,
  getCurrentTimeStamp,
  dateFormat,
  showToast,
  duc2W,
  objSerialize
}