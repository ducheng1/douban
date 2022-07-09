// pages/index/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    stars: {},
    isBook: false,
    summary: "",
    id: 0,
  },
  /**
   * 事件处理--收藏事件
   */
  handleCollect: function () {
    wx.navigateTo({
      url: "../collect/collect",
    })
  },
  /**
   * 事件处理--看过事件
   */
  handleSeen: function () {
    wx.navigateTo({
      url: "../seen/seen",
    })
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
    // console.log(e.data);
    if (data.type == "图书") {
      wx.request({
        method: "GET",
        url: 'http://api.yuanzhangzcc.com:89/v2/book/id/' + data.sid,
        success: res => {
          // console.log(res);
          this.setData({
            detail: res.data,
            summary: res.data.summary.replace(/<\/?.+?>/g, "").replace(/ /g, ""),
            isBook: true
          });
        },
        fail: res => {
          console.log(res);
        }
      });
    } else {
      wx.request({
        method: "GET",
        url: 'http://api.yuanzhangzcc.com:89/movies/' + data.sid,
        success: res => {
          // console.log(res);
          this.setData({
            detail: res.data,
            stars: res.data.actor.split("/"),
            isBook: false
          });
        },
        fail: res => {
          console.log(res);
        }
      });
    };
    // this.setData({
    //   detail: data,
    // });
    // console.log(typeof data);
    // console.log(data);
  },
})