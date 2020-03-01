// pages/home/home.js
import request from '../../service/network.js'

// 获取全局数据globalData
// const app = getApp()
// app.globalData.token

Page({
  // 页面添加分享效果
  onShareAppMessage(options) {
    return {
      title: '你好，coderGoo', // 转发标题
      path: '/pages/about/about', // 转发路径
      // imageUrl: '自定义图片路径' // 自定义图片路径
    }
  },

  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 1000,
      icon: 'loading',
      mask: true, // 添加蒙版
    })
  },

  handleShowModal() {
    wx.showModal({
      title: '你好',
      content: 'Hello World',
      // showCancel: false, // 除去 取消按键的显示
      cancelText: '退出',
      cancelColor: 'red'
    })
  },

  handleShowLoading() {
    // wx.showLoading 必须手动调用 wx.hideLoading 消失
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
  },

  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'pink',
      success(res) {
        console.log(res)
      }
    })
  },

  onLoad(options) {
    // 1. 原生方式发送网络请求
    // this.getDataOrigin()

    // 2. 使用封装的request发送网络请求
    // request({
    //   url: 'http://123.207.32.32:8000/api/wh/recommend'
    // })
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  },

  getDataOrigin() {
    // 发送网络请求
    // 1. 发送简单的网络请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/wh/recommend',
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    // 2. 发送携带参数的网络请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/wh/home/data',
    //   data: {
    //     page: 1,
    //     type: 'sell'
    //   },
    //   success(res) {
    //     console.log(res)
    //   }
    // })

    // 3. post请求 并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'coderGoo',
        age: 18
      },
      success(res) {
        console.log(res)
      }
    })
  }
})