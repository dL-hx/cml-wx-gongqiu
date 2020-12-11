import index from './index.interface';

export default function getNetworkType() {
  return new Promise((resolve, reject) => {
    index.getNetworkType(res => {
      if (res.networkType) {
        // res 返回网络类型, 有效值：
        // "wifi"/"2g"/"3g"/"4g"/unknown(Android下不常见的网络类型)/none(无网络)
        resolve({
          ...res,
        });
      } else {
        reject(res);
      }
    })
  });
}
