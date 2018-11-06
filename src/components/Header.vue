<template>
<div class="header">
  <h3>
    <router-link :to="backpath"><i></i></router-link>
    {{ title }}
  </h3>
</div>
</template>
<script>
export default {
  props: ['title', 'backpath']
}
</script>
<style lang="stylus" scoped>
.header h3
  height 40px
  line-height 40px
  text-align center
  position relative

  a
    position absolute
    width 40px
    height 40px
    left 0
    top 0

    i
      display block
      width 15px
      height 2px
      background #333
      position absolute
      top 50%
      left 50%
      transform translate3d(-50%,-50%,0)
    i::before,i::after
      content ''
      width 10px
      height 2px
      background #333
      position absolute
      left 0
      transform-origin left center
    i::before
      transform rotate(-40deg)
    i::after
      transform rotate(40deg)
</style>
