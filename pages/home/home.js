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
  },

  handleIncrementCpn() {
    // 修改 my-sel 里的 count 
    // 1. 获取组件对象
    const my_sel = this.selectComponent('#my-sel')
    // 2. 修改组件数据  不符合规范
    // my_sel.setData({
    //   count: my_sel.data.count + 20
    // })
    // 3. 通过执行组件内的方法修改数据
    my_sel.incrementCount(10)
  }
})