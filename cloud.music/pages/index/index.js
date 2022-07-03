// index.js
import request from '../../utils/request'

// 获取应用实例
const app = getApp()

//Page Object
Page({
  data: {
    bannerList: [],
    recommendList: [],
    topList: [],
  },
  //options(Object)
  onLoad: async function(options) {
    // 轮播
    const bannerListData = await request('/banner', { type: 2 })
    this.setData({
      bannerList: bannerListData.banners
    })
    // 推荐歌单
    const recommendListData = await request('/personalized', { limit: 10 })
    this.setData({
      recommendList: recommendListData.result
    })
    // 排行榜
    let idx = 0
    const topListRes = []
    while (idx < 5) {
      const topListData = await request('/top/list', { idx: idx++ })
      const { name, tracks } = topListData.playlist
      const topListItem = {
        name,
        tracks: tracks.slice(0, 3)
      }
      topListRes.push(topListItem)
      this.setData({
        topList: topListRes
      })
    }
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  
