//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['pic1', 'pic2', 'pic3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    categoryImg: [{
      src: 't1',
      title: "aa"
    }, {
      src: 't2',
      title: "bb"
    }, {
      src: 't3',
      title: "cc"
    }, {
      src: 't1',
      title: "aa"
    }, {
      src: 't2',
      title: "bb"
    }, {
      src: 't3',
      title: "cc"
    }, {
      src: 't1',
      title: "aa"
    }, {
      src: 't2',
      title: "bb"
    }, {
      src: 't3',
      title: "cc"
    }, {
      src: 't3',
      title: "cc"
    }]
  },
  changeProperty: function(e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  tapImage: function(e){
    let item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/list/detail/detail?title=detail',
    })
  }
})