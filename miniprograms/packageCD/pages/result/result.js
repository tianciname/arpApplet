// pages/result/result.js
var innerAudioContext = wx.createInnerAudioContext();
var value=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    src:"../../audio/FormatFactoryPart1.mp3",
    isPlay:true,
    iconSrc:["../../image/pause.png","../../image/play.png"],
    icon: "../../image/pause.png",
    currentTime: "0:00",
    duration: "0:00",
    screenWidth:0,
    rate:0,
    animationData: {}
  },

  play(){
    innerAudioContext.play();
    this.setData(
      {
        isPlay: true,
        icon: this.data.iconSrc[0]
      }
    )
  },

  pause(){
    innerAudioContext.pause();
    this.setData(
      {
        isPlay: false,
        icon: this.data.iconSrc[1]
      }
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      var that = this;
    function formatTime(time){    
      var minute=Math.floor(time/60)%60;
      var second=Math.floor(time)%60;
      return(minute<10? '0'+minute:minute)+":"+
      (second<10?'0'+second:second)
    };
    innerAudioContext.onTimeUpdate(() => {
      this.setData({
        currentTime: formatTime(innerAudioContext.currentTime),
        duration: formatTime(innerAudioContext.duration),
        rate:Math.round(innerAudioContext.currentTime/innerAudioContext.duration*100)/100
      })
      function drawProgressBg(){
        wx.createSelectorQuery()
           .select("#ProgressBgId")
           .fields({
             node: true,
             size: true,
           })
           .exec(initBg.bind(that))
       }
       function initBg(res){
        const canvas = res[0].node
        // Canvas 画布的实际绘制宽高
        const renderWidth = res[0].width
        const renderHeight = res[0].height
        // Canvas 绘制上下文
        const ctx = canvas.getContext('2d')
    
        // 初始化画布大小
        const dpr = wx.getWindowInfo().pixelRatio
        canvas.width = renderWidth * dpr
        canvas.height = renderHeight * dpr
        ctx.scale(dpr, dpr)
    
         ctx.lineWidth = 1
         ctx.strokeStyle = "#EEEEEE"
         ctx.lineCap = "round"
         ctx.beginPath()
         ctx.arc(175,175,170,0,2*Math.PI,false);
         ctx.stroke();//对当前路径进行描边
       }
       function drawCircle(step){
        //  this.setData({
        //    step
        //  })
         wx.createSelectorQuery()
           .select("#ProgressId")
           .fields({
             node: true,
             size: true,
           })
           .exec(initCircle.bind(that))
           
       }
       function initCircle(res){
        const canvas = res[0].node
        // Canvas 画布的实际绘制宽高
        const renderWidth = res[0].width
        const renderHeight = res[0].height
        // Canvas 绘制上下文
        const ctx = canvas.getContext('2d')
    
        // 初始化画布大小
        const dpr = wx.getWindowInfo().pixelRatio
        canvas.width = renderWidth * dpr
        canvas.height = renderHeight * dpr
        ctx.scale(dpr, dpr)
         ctx.lineWidth = 4
         ctx.strokeStyle = "#FFFFFF"
         ctx.lineCap = "round"
         ctx.beginPath()
         ctx.arc(175,175,170,-0.5*Math.PI,that.data.rate*2*Math.PI-0.5*Math.PI,false);
         ctx.stroke();//对当前路径进
         ctx.translate(175,175)

         ctx.beginPath()
         ctx.fillStyle='#FFFFFF'
         ctx.arc(170*Math.cos(that.data.rate*2*Math.PI-0.5*Math.PI),170*Math.sin(that.data.rate*2*Math.PI-0.5*Math.PI),5,0,2*Math.PI,false)
         ctx.fill()
       }
      
       //根据屏幕宽度计算当前半径使得画出来的圆能自适应
       function calScreen(val){
         var screenWidth = that.data.screenWidth
         return val*(screenWidth/375)
       }
        drawProgressBg()
        drawCircle(2)

    });
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    });
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    });
    innerAudioContext.onEnded(() => {
        console.log('停止播放')
      this.setData({
        currentTime: formatTime(innerAudioContext.duration)
      })
    });

    wx.getSystemInfo({
        success: (res) => {
          this.setData({
            screenWidth:res.screenWidth
          })
        },
      });

        },
        
    // this.circle = this.selectComponent("#circle");
    // console.log(this.data)
    // this.circle.onLoad()
//   //this.progressView = this.selectComponent("#progressView");
//   this.circle = this.selectComponent("#circle");
 
//   //this.progressView.showCanvasRing(value, 100); //绘制环形进度
//   this.circle.drawCircle(value, 100); //绘制环形进度

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    innerAudioContext.src = 'https://6364-cd-9gqvj0r9597e8bd4-1313433290.tcb.qcloud.la/FormatFactoryPart1.mp3?sign=582b5325c6881d1588fb80f7c60cac3c&t=1661700734';
    innerAudioContext.autoplay = true;
    innerAudioContext.volume = 0.5;
    //获取当前页面栈
    const pages = getCurrentPages();
    //获取上一页面对象
    let prePage = pages[pages.length - 2];
    console.log(prePage.data)
  }
,

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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

  },


})