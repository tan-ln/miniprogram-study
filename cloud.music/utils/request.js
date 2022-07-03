import config from './config'
const { host, mobileHost } = config

export default (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: mobileHost + url,
      data,
      method,
      success: (res) => {
        // console.log(res);
        resolve(res.data)
      },
      fail: (err) => {
        // console.log(err);
        reject(err)
      }
    })
  })
}