Component({
  data: {
    selected: 0,
    color:"#D8D8D8",
    selectedColor:"#FFFFFF",
    list: [{
      pagePath: "/pages/index/index",
      text: "主页",
      iconPath: "/image/Index.png",
      selectedIconPath: "/image/Index_selected.png",
    }, {
      pagePath: "/pages/mine/mine",
      text: "我的",
      iconPath: "/image/My.png",
      selectedIconPath: "/image/My_selected.png",
    }]
  },
  attached() {
  },
  methods:{
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData(
        {
        selected: data.index,
      })
      
    }
  }
})