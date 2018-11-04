<template>
<div class="banner">
  <div class="banner-container">
    <div class="banner-wrapper" :style="{'width':wraperWidth,'transform':'translate3d(' + x + ',0,0)'}">
      <div class="banner-item" :style="{'backgroundImage':'url('+bannerURLs[bannerURLs.length-1]+')','width':itemWidth}"></div>
      <div v-for="(url,id) of bannerURLs" :key="id" :class="{'banner-item':true,'active':!id}" :style="{'backgroundImage':'url('+url+')','width':itemWidth}"></div>
      <div class="banner-item" :style="{'backgroundImage':'url('+bannerURLs[0]+')','width':itemWidth}"></div>
    </div>
  </div>
  <div class="banner-indicator">
    <div v-for="(url,id) of bannerURLs" :key="id" :class="{'indicator':true,'active':!id}"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Banner',
  data () {
    return {
      xdist: 100 / (this.bannerURLs.length + 2),
      x: 0,
      wraperWidth: (this.bannerURLs.length + 2) * 100 + '%',
      itemWidth: 100 / (this.bannerURLs.length + 2) + '%'
    }
  },
  methods: {
    swiper () {
      this.scrollBanner()
      this.reactBanner()
    },
    scrollBanner () {
      console.log('开始滚动')
      this.x = '-' + this.xdist + '%'
      setInterval(() => {

      }, 1000)
    },
    reactBanner () {
      console.log('绑定动作')
    }
  },
  props: ['bannerURLs'],
  mounted: function () {
    this.swiper()
  }
}
</script>
<style lang="stylus" scoped>
common-border-radius = 6px

translate(x,y,z)
  transform translate3d(x,y,z)
  -webkit-transform translate3d(x,y,z)
  -moz-transform translate3d(x,y,z)
  -ms-transform translate3d(x,y,z)
  -o-transform translate3d(x,y,z)

transition(pro = all,dur = .3s,fun = ease-in)
  transition pro dur fun
  -webkit-transition pro dur fun
  -moz-transition pro dur fun
  -ms-transition pro dur fun
  -o-transition pro dur fun

.banner
  width 100%
  height 170px
  position relative

  .banner-container
    width: 100%
    height 150px
    overflow hidden
    border-radius common-border-radius

    .banner-wrapper
      height 100%
      will-change transform
      transition()

      .banner-item
        float left
        height 100%
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
    .indicator:first-child
      margin-left 0

    .indicator.active
      width 8px
      background #ffdc00
</style>
