// index.js
// 获取应用实例
const app = getApp()


Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    title:[
      "唱片森林",
      "自制唱片机"
    ],
    sentences:[
      "我们会在唱片森林中为您匹配一个年轮",
      "您可以自主规划音乐生成的年轮路径，生成一首独一无二的音乐"
    ]
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
        color:"#D8D8D8",
        selectedColor:"#FFFFFF"
      })

    }
  },

  
})
