// components/my-slot/my-slot.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  
  /**
   * 组件内的配置选项
   */
  options: {

  },

  // -----------外界给组件传递额外样式-------
  externalClasses: [],

  //--------------------监听属性改变-----------------
  observer: {
    count(newVal) {
      console.log(newVal)
    }
  },

  // ------------组件中的生命周期函数-----------
  // 1. 监听所在页面的生命周期
  pageLifetimes: {
    // 监听组件所在页面显示出来时
    show() {
      console.log('监听组件所在页面显示出来时')
    },
    // 监听组件所在页面隐藏起来时
    hide() {
      console.log('监听组件所在页面隐藏起来时')
    },
    // 监听组件所在页面尺寸改变时
    resize() {
      console.log('监听组件所在页面尺寸改变时')
    }
  },

  // 2. 监听组件本身的生命周期
  lifetimes: {
    // 组件被创建出来时
    created() {
      console.log('组件被创建出来时')
    },
    // 组件被添加到 Page 或者 组件
    attached() {
      console.log('组件被添加到 Page 或者 组件')
    },
    // 组件被渲染出来时
    ready() {
      console.log('组件被渲染出来时')
    },
    // 组件被移动到另外一个节点
    moved() {
      console.log('组件被移动到另外一个节点')
    },
    // 组件被移除掉 
    detached() {
      console.log('组件被移除掉')
    }
  }
})
