Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false
  },
  onLoad: function () {
    //页面初次加载判断用户是否授权过 去缓存中读取是否有
    wx.getStorage({
      key: 'openid',
      success(res) {
       //判断是否有openid  如果不为空则跳转到首页
        if (res.data != "") {
          //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
          wx.switchTab({
            url: '/pages/index/index'
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e)
    //如果不允许  则没有userInfo这个值
    //获取用户的昵称 判断用户点击的是允许还是拒绝
    if (e.detail.userInfo) {
      //如果用户允许，则能得到userInfo
      console.log(e.detail.userInfo)
      //获取用户的昵称 
      let nickname = e.detail.userInfo.nickName
      // console.log(nickname)
      //获取用户的昵称  去获取code
      wx.login({

        success(res) {
          if (res.code) {
            //得到了code值  携带参数发送请求
            console.log(res.code)
            //发起网络请求
            wx.request({
              url: 'https://www.showdoc.com.cn/2047399033468152/9241960032385263',
              data: {
                code: res.code,
                nickname: nickname,
              },
              dataType: "json",
              method: "GET",
              success(res) {
                console.log(res.data.data.openid)
                console.log(res.data.code)
                //判断是否授权成功
                if (res.data.code == 200) {
                  //将用户的openid缓存起来
                  wx.setStorage({
                    key: "openid",
                    data: res.data.data.openid
                  })
                  //页面跳转
                  wx.switchTab({
                    //跳转地址
                    url: '/pages/index/index',
                  })
                } else {

                }
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })

    }

  }

})