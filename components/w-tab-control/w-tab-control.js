// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  data: {
    currentIndex: 0
  },

  methods: {
    handleItemClick(event) {
      // 1. 获取 index
      // console.log(event.currentTarget.dataset.index)
      const index = event.currentTarget.dataset.index
      // 2. 修改 currentIndex
      this.setData({
        currentIndex: index
      })
      // 3. 通知页面的内部点击事件
      this.triggerEvent('itemClick', {index, title: this.properties.titles[index]}, {})
    }
  }
})