<template>
<div class="index">
  <header>
    <div class="left">首页</div>
    <div class="right"></div>
  </header>
  <div class="search">
      <input type="text" />
      <p class="placeholder">搜索你想要的宝贝吧~</p>
  </div>
  <Banner :bannerURLs="bannerURLs"></Banner>
</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'index',
  data () {
    return {
      bannerURLs: [
        '/static/img/big_shop1.png',
        '/static/img/big_shop2.png',
        '/static/img/big_shop3.png'
      ]
    }
  },
  components: {
    Banner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
common-border-radius = 6px
translate(x,y,z)
  transform translate3d(x,y,z)
  -webkit-transform translate3d(x,y,z)
  -moz-transform translate3d(x,y,z)
  -ms-transform translate3d(x,y,z)
  -o-transform translate3d(x,y,z)

.search
  width 100%
  height 30px
  position relative
  margin-bottom 10px

  input
    display block
    width 100%
    height 30px
    line-height 30px
    background #F5F5F5
    border-radius common-border-radius
    padding 0 10px

  p
    font-size 12px
    color #999
    position absolute
    left 50%
    top 50%
    translate(-50%,-50%,0)
    padding-left 17px

  p::before
    content ''
    position: absolute
    left 0
    top 50%
    translate(0,-50%,0)
    width 12px
    height 12px
    background url('../assets/img/index/search.png') no-repeat center/cover
</style>
