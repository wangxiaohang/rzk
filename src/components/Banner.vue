<template>
<div class="banner">
  <div class="swiper-container" id="banner-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(urls,id) of bannerURLs" :key="id" :id="id" :style="{'backgroundImage':'url('+urls['image_800']+')'}"></div>
    </div>
  </div>
  <div class="banner-indicator">
    <div v-for="{id} of bannerURLs" :key="id" :class="{'indicator':true,'active':activeIndex==id}"></div>
  </div>
</div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'Banner',
  data () {
    return {
      bannerSwiper: null,
      activeIndex: 0
    }
  },
  props: ['bannerURLs'],
  mounted: function () {
    var that = this
    console.log('开始初始化banner swiper')
    this.bannerSwiper = new Swiper('#banner-swiper', {
      autoplay: {
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: true,
      on: {
        slideChange: function () {
          if (this.activeIndex === 0) {
            that.activeIndex = that.bannerURLs.length - 1
          } else if (this.activeIndex === that.bannerURLs.length - 0 + 1) {
            that.activeIndex = 0
          } else {
            that.activeIndex = this.activeIndex - 1
          }
        }
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
common-border-radius = 6px
.banner
  width 100%
  height 170px
  position relative

  .swiper-container
    height: 150px
    border-radius common-border-radius
    overflow hidden

    .swiper-slide
      background-repeat no-repeat
      background-position center
      background-size cover

  .banner-indicator
    position absolute
    bottom 0
    left 50%
    translate(-50%,0,0)
    height 20px

    .indicator
      width 4px
      height 4px
      border-radius 2px
      overflow hidden
      background #a2a2a2
      display inline-block
      margin-top 50%
      translate(0,-50%,0)
      transition(all)
      margin-left 5px
      transition all .1s linear
      will-change width
    .indicator:first-child
      margin-left 0

    .indicator.active
      width 8px
      background #ffdc00
</style>
