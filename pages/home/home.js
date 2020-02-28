// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    score: 45
  },

  handleToggle() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleScoreInc() {
    this.setData({
      score: this.data.score + 6
    })
  }
  
})