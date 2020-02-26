// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  handleInput(e) {
    console.log("用户输入" + e)
  },
  handleFocus(e) {
    console.log("得到焦点" + e)
  },
  handleBlur(e) {
    console.log("失去焦点" + e)
  }
})