// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'zlf',
    students: [
      {
        name: 'james',
        age: 15
      },
      {
        name: 'kobe',
        age: 15
      },
      {
        name: 'curry',
        age: 15
      }
    ],
    counter: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleBtnClick(){
    // 1.错误做法，界面不会刷新
    // this.data.counter += 1
    // console.log(this.data.counter,'click')
    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleMinusBtnClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event,'event')

  }
})