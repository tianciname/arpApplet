var windWidth = wx.getSystemInfoSync().windowWidth;
const xs = windWidth / 750;
const app = getApp();
Page({
    /**
   * 组件的属性列表
   */
  properties: {
    //画布的宽度 单位rpx
    canvasWidth: {
      type: Number,
      value: 400
    },
    //线条宽度 默认16,单位rpx
    lineWidth: {
      type: Number,
      value: 1
    },
    //线条颜色 默认"#E3AF6A"
    lineColor: {
      type: String,
      value: "#FFFFFF"
    },
    //进度条底色
    bottomColor: {
      type: String,
      value: "#FFFFFF"
    },
    //当前的值 
    value: {
      type: Number,
      value: 36
    },
    //最大值 默认100
    maxValue: {
      type: Number,
      value: 100
    },
    //是否显示中间进度值文字
    showText: {
      type: Boolean,
      value: true
    },
    //中间字体大小，单位rpx
    textSize: {
      type: Number,
      value: 60
    },
    //中间字体颜色
    textColor: {
      type: String,
      value: "#E3AF6A"
    }
  },
  methods:{
    onLoad: function () {
        wx.createSelectorQuery()
        .select('#circle') // 在 WXML 中填入的 id
        .fields({ node: true, size: true })
        .exec((res) => {
            console.log("绘制成功")
                    // Canvas 对象
                    const canvas = res[0].node
                    // 渲染上下文
                    const ctx = canvas.getContext('2d')
    
                    // Canvas 画布的实际绘制宽高
                    const width = res[0].width
                    const height = res[0].height
    
                    // 初始化画布大小
                    const dpr = wx.getWindowInfo().pixelRatio
                    canvas.width = width * dpr
                    canvas.height = height * dpr
                    ctx.scale(dpr, dpr)
    
                    // 清空画布
                    ctx.clearRect(0, 0, width, height)
    
                    // 绘制红色正方形
                    ctx.fillStyle = 'rgb(200, 0, 0)';
                    ctx.fillRect(10, 10, 50, 50);
    
                    // 绘制蓝色半透明正方形
                    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
                    ctx.fillRect(30, 30, 50, 50);
    
    
        })
      }
  }

})