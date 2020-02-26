// pages/home/home.js
const app = getApp()
console.log(app.globalData.name, app.globalData.age, app.globalData.sex)

Page({
  data: {
    msg: 'coderGoo',
    students: [{
        id: 101,
        name: '张三',
        age: 18
      },
      {
        id: 102,
        name: '李四',
        age: 20
      },
      {
        id: 103,
        name: '王五',
        age: 37
      }
    ],
    count: 0
  },

  handleAdd() {
    this.setData({
      count: this.data.count + 1
    })
  },
  handleSub() {
    this.setData({
      count: this.data.count - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})