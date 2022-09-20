// pages/togenerate/togenerate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picsId:[],
    picsUrl:[],
    selectedId:'105bd5c5-4485-439d-85cc-fe388b39328e',
    // swiper:{
    //   pics:[],
    //   autoplay: false,
    //   interval: 5000,
    //   duration: 1000,
    //   current: 0},
    previsShow: true,
    nextisShow: true,
    swiper: {
      pics:[
        {
          id:0,
          picUrl:"../../image/310-3-1-1.png"
        },
        {
          id:1,
          picUrl:"../../image/310-3-1-1.png"
        },
        {
          id:2,
          picUrl:"../../image/310-3-1-1.png"}
      ],
      autoplay: false,
      interval: 5000,
      duration: 1000,
      current: 0,
    },
  },

  getPics(){
    wx.request({
      url: '',
      method:'GET',
      data:{

      },
      success:(res)=>{
        this.pics = res.data.ar.allid;
        for(var index=0;index<this.picsId.length;index++ ){
          var obj={
            id:this.picsId[index]
          }
          wx.request({
            url: '  ',
            data:{id:this.picsId[index]},
            success:(res)=>{
              obj.picUrl = res.data.annualRingImage;
              pics.push(obj);
            }
          })
        }
      }
    })

  },

  prev(){
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current > 0 ? current - 1 : swiper.pics.length - 1;
    this.setData({
      swiper: swiper,
  })
},

next() {
  var swiper = this.data.swiper;
  var current = swiper.current;
  swiper.current = current < (swiper.pics.length - 1) ? current + 1 : 0;
  this.setData({
    swiper: swiper,
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPics();
    var that = this;
    wx.request({
      url: "http://10.122.238.253:8888/ar/allid", 
      success :function (res) {
        that.setData({
          picsId :res.data.data.idList
      })
    },
  });
  for(var i=0;i<this.data.picsId.length;i++){
    var id = this.data.picsId[i];
    wx.request({
      url: 'http://10.122.238.253:8888/resources/'+id+'/image/image.jpg',
      success:function (res) {
        console.log('成功')
      }
    })
  }
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
    console.log(this.data.picsId)
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