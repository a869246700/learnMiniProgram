// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },

  handleIncrement() {
    this.setData({
      count: this.data.count + 1
    })
  },

  handleTabClick(obj) {
    console.log(obj)
  }
})