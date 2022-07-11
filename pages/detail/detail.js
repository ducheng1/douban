// pages/index/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    genre: [],
    country: [],
    stars: {},
    isBook: false,
    summary: "",
    id: 0,
    isLoading: true,
    isExpand: false,
    height: 0,
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
   * 事件处理--展开收起按钮
   */
  handleExpand: function () {
    this.setData({
      isExpand: !this.data.isExpand,
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
    this.setData({
      isLoading: true
    });
    let _that = this;
    if (data.type == "图书") {
      wx.request({
        method: "GET",
        url: 'http://api.yuanzhangzcc.com:89/v2/book/id/' + data.sid,
        success: res => {
          // console.log(res);
          this.setData({
            detail: res.data,
            summary: res.data.summary.replace(/<\/?.+?>/g, "").replace(/ /g, ""),
            isBook: true,
            isLoading: false,
            length: res.data.summary.replace(/<\/?.+?>/g, "").replace(/ /g, "").length,
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
            country: res.data.country.split("/"),
            genre: res.data.genre.split("/"),
            stars: res.data.actor.split("/"),
            isBook: false,
            isLoading: false,
          });
          wx.createSelectorQuery().in(this).select(".introContainer").boundingClientRect().exec(function (res) {
            _that.setData({
              height: res[0].height*2/50,
            })
          });
        },
        fail: res => {
          console.log(res);
        }
      });
    };
  },
  // console.log(typeof data);
  // console.log(data);
  onReady(e) {},
})