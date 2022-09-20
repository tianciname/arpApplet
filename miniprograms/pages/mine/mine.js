// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      {
        text:"我的收藏",
        icon:"../../image/like_menu.png"
      },
      {
        text:"浏览历史",
        icon:"../../image/history-fill.png"
      },
      {
        text:"设置",
        icon:"../../image/settings.png"
      }],
    collection:[
      {
        image:"",
        name:""
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
        color:'#000000',
        selectedColor:"#487F50"
      })
      console.log(this.getTabBar())
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})