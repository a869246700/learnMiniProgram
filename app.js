const TOKEN = 'token'

App({
  globalData: {
    token: ''
  },
  onLaunch: function() {
    // 先从缓存中获取 token ，如果为空则进行登录操作
    // 1. 取出 token
    const token = wx.getStorageSync(TOKEN)

    // 2. 判断 token 是否有值
    if (token && token.length !== 0) {
      // 存在 token ， 直接验证 token 是否过期
      this.check_token(token);
    } else {
      // 登录操作
      this.login();
    }
  },

  check_token(token) {
    console.log('执行了验证操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          // 证明之前的 token 仍然有效
          this.globalData.token = token
        } else {
          // token 失效，重新登录并执行 login 
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)

      }
    })
  },

  login() {
    console.log('执行了登录操作')
    wx.login({
      success: (res) => {
        // code 只有五分钟有效期
        // 1. 获取 code
        const code = res.code;

        // 2. 将 code 发给 自己的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1. 取出token
            const token = res.data.token;

            // 2. 将头 token 保存在 globalData 中
            this.globalData.token = token;

            // 3. 将 token 进行本地存储
            wx.setStorageSync(TOKEN, token); // 同步 
          }
        })
      }
    })
  }
})