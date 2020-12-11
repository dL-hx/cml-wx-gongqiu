import index from './index.interface';

export default function login() {
  return new Promise((resolve, reject) => {
    index.login(res => {
      if (res.code) {
        resolve({
          ...res,
        });
      } else {
        reject(res);
      }
    })
  });
}
