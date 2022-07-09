// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [{
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "dist/icons/home.png",
        "selectedIconPath": "dist/icons/home_selected.png",
        "icon": "home-o"
      },
      {
        "pagePath": "pages/list/list",
        "text": "榜单",
        "iconPath": "dist/icons/ranking-list.png",
        "selectedIconPath": "dist/icons/ranking-list_selected.png",
        "icon": "label-o"
      },
      {
        "pagePath": "pages/user/user",
        "text": "我的",
        "iconPath": "dist/icons/user.png",
        "selectedIconPath": "dist/icons/user_selected.png",
        "icon": "user-o"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({
        active: event.detail
      });
      wx.switchTab({
        url: '../../' + this.data.list[event.detail].pagePath,
      })
    },
  }
})