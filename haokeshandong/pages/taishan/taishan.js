// pages/taishan/taishan.js
Page({
data: {
  swiperCurrent: 1,
  arr: [
  {images: 'images/01.jpg'},
  {images: 'images/02.jpg'},
  {images: 'images/03.jpg'}
],
  indicatorDots:true,
  autoplay: true,
  interval: 2000,
  duration: 1000,
  circular: true,
  beforeColor: "white",//指示点颜色  
  afterColor: "coral",//当前选中的指示点颜色  
  previousmargin: '40rpx',//前边距
  nextmargin: '40rpx',//后边距
},

//轮播图的切换事件  
swiperChange: function (e) {
  console.log(e.detail.current);
  this.setData({
    swiperCurrent: e.detail.current   //获取当前轮播图片的下标
  })
},
//滑动图片切换  
chuangEvent: function (e) {
  this.setData({
    swiperCurrent: e.currentTarget.id
  })
}})