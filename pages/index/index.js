import {
  indexData
} from "../../data/douban";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 0,
        title: "影院热映",
        data: indexData[0].contentList.slice(0, 10),
      },
      {
        id: 1,
        title: "豆瓣热门",
        data: indexData[1].contentList.slice(0, 10),
      },
      {
        id: 2,
        title: "近期热门剧集",
        data: indexData[2].contentList.slice(0, 10),
      },
      {
        id: 3,
        title: "近期热门综艺节目",
        data: indexData[3].contentList.slice(0, 10),
      },
      {
        id: 4,
        title: "畅销图书",
        data: indexData[4].contentList.slice(0, 10),
      }
    ]
  },
  /**
   * 跳转到搜索页面
   */
  searchOnClick: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 跳转到更多页面
   */
  moreHandler: function (e) {
    let id = e.currentTarget.dataset.id;
    let title = e.currentTarget.dataset.title;
    console.log(id);
    wx.navigateTo({
      url: '../more/more?id=' + id + '&title=' + title,
    })
  },
  /**
   * 跳转到详情页
   */
  detailHandler: function (e) {
    let item = e.currentTarget.dataset.item;
    // console.log(e.currentTarget.dataset);
    wx.navigateTo({
      url: '../detail/detail?data=' + JSON.stringify(item),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '首页',
    });
    wx.setNavigationBarColor({
      backgroundColor: '#42bd56',
      frontColor: '#ffffff'
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 0,
      })
    }
  }
})