Page({
  data: {
    nickName: "",
    img: "",
    isLogin: false
  },
  /**
   * 获取用户信息--登录
   */
  getUserInfo: function () {
    wx.getUserInfo({
      desc: "获取用户的信息",
      success: res => {
        // console.log(res);
        this.setData({
          nickName: res.userInfo.nickName,
          img: res.userInfo.avatarUrl,
          isLogin: true
        });
      },
      fail: res => {
        console.log("failed");
      }
    })
  },
  /**
   * 用户退出登录
   */
  userLogOut: function () {
    this.setData({
      nickName: "",
      img: "",
      isLogin: false
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '书影音档案',
    });
    wx.setNavigationBarColor({
      backgroundColor: '#ffffff',
      frontColor: '#000000'
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("user onShow");
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 2,
      })
    }
  }
});