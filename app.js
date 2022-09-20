// app.js
App({
  onLaunch: function () {
    // 展示本地存储能力,登录信息也可以通过缓存功能来处理
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function (res) {
        const app = getApp()
        app.globalData.code = res.code
        console.log("code："+app.globalData.code)
        //这里获取code以后，可以向服务器发起请求获取用户的openid
      }
    })
  },
  globalData: {
    userInfo: {},
    hasUserInfo: false,
    openid: "",
    code: ""
  }
})
