// packageCD/pages/rotate/rotate.js
var _animation; // 动画实体
var _animationIndex = 0; // 动画执行次数index（当前执行了多少次）
var _animationIntervalId = -1; // 动画定时任务id，通过setInterval来达到无限旋转，记录id，用于结束定时任务
const _ANIMATION_TIME = 60; // 动画播放一次的时长ms
Page({

  /**
   * 页面的初始数据
   */
  data: {
    direction:0,
    selectedId:'',
    micsId:[],
  },
  
    /**
     * 实现image旋转动画，每次旋转 1 * n度
     */
    rotateAni: function (n) {
      _animation.rotate(1 * (n)).step()
      this.setData({
        animation: _animation.export()
      })
    },
  
    /**
     * 开始旋转
     */
    startAnimationInterval: function () {
      console.log('rotate')
      var that = this;
      that.rotateAni(5); // 进行一次旋转
      _animationIntervalId = setInterval(function () {
        console.log(_animationIndex)
        _animationIndex++;
        that.rotateAni(5);
      }, _ANIMATION_TIME); // 每间隔_ANIMATION_TIME进行一次旋转
    },
  
    /**
     * 停止旋转
     */
    stopAnimationInterval: function () {
      if (_animationIntervalId > 0) {
        clearInterval(_animationIntervalId);
        _animationIntervalId = 0;
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    _animationIndex = 0;
    _animationIntervalId = -1;
    this.data.animation = '';
    // _animation = wx.createAnimation({
    //   duration: _ANIMATION_TIME,
    //   timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
    //   delay: 0,
    //   transformOrigin: '50% 50% 0'
    // })
    var id = this.data.selectedId;
    var that = this;
    wx.request({
      url: 'http://10.122.238.253:8888/ar/'+id,
      success: function (res) {
        that.setData({
          micsId: res.data.data.musicList
        })
      }
    })
    this.animate('.picture',[
        { opacity: 1.0, rotate: 0, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 30, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 60, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 90, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 120, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 150, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 180, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 210, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 240, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 270, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 300, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 330, backgroundColor:'rgba(0,0,0,0)'},
        { opacity: 1.0, rotate: 360, backgroundColor:'rgba(0,0,0,0)'}
    ],10000)
    // //获取当前页面栈
    // const pages = getCurrentPages();
    // //获取上一页面对象
    // let prePage = pages[pages.length - 2];
    // this.setData({
    //   selectedId: prePage.data.selectedId
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // this.startAnimationInterval()
    // },
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