// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: ''
  },
  handleImageLoad() {
    console.log('图片加载完成')
  },

  handleChooseAlbum() {
    // 使用系统API，让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      success: (res) => {
        // 1. 取出路径
        let path = res.tempFilePaths[0]

        // 2. 设置imageSrc
        this.setData({
          imageSrc: path
        })
      },
    })
  }
})