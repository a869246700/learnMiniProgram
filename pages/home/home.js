// pages/home/home.js
Page({
  data: {
    msg: '哈哈'
  },

  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?title=hello world',
    })
  }
})