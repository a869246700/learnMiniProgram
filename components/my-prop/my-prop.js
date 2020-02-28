// components/my-prop/my-prop.js
Component({
  properties: {
    title: {
      type: String,
      value: '我是默认标题',
      observer(newV, oldV) {
        console.log(newV, oldV)
      }
    }
  },
  externalClasses: [
    'titleclass'
  ]
})
