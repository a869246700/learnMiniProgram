// pages/detail/detail.js
Page({
  onLoad: function (options) {
    console.log(options)
  },
  onUnload: function () {
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]
    home.setData({
      msg: '一giao窝里giao'
    })
  },

  handlePushBack() {
    wx.navigateBack({
      delta: 1
    })
  }
})