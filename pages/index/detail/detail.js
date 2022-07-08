// pages/index/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    id: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    let data = JSON.parse(e.data);
    // console.log(e.data);
    wx.setNavigationBarTitle({
      title: data.name,
    });
    wx.setNavigationBarColor({
      backgroundColor: '#ffffff',
      frontColor: '#000000',
    });
    this.setData({
      detail: data,
    })
    // console.log(typeof data);
    console.log(data);
  },
})