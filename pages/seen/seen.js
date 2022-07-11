// pages/seen/seen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: "看过",
    });
    wx.setNavigationBarColor({
      backgroundColor: '#ffffff',
      frontColor: '#000000',
    });
  },
  /** 
   * 事件处理--按钮点击
   */
  handleClick: function () {
    wx.navigateBack({
      delta: 0,
    });
    wx.showToast({
      title: '提交成功',
      icon: "success",
      duration: 2000,
    })
  }
})