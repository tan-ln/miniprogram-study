## 配置合法域名

[https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=704570182&lang=zh_CN](https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=704570182&lang=zh_CN)

1. 只支持 https
2. 每个接口最多配置 20 个域名
3. `wx.request、wx.uploadFile、wx.downloadFile` 等最大并发限制为 10 个
4. 开发过程中可以使用 *不校验合法域名*