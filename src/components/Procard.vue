<template>
<div :class="['procard',lines==2?'twe':'three']">
  <p class="tit">{{ info.title }}</p>
  <div class="img" :style="{'backgroundImage':'url('+info.image+')'}"></div>
  <p class="price">{{ info.price }}</p>
</div>
</template>
<script>
export default {
  props: ['info', 'lines']
}
</script>
<style scoped lang="stylus">
.procard
  text-align center
  background #F3F3F3
  border-radius 2px

  .img
    width 60%
    height 0
    background-color #F3F3F3
    padding-bottom 60%
    border-radius 6px
    overflow hidden
    margin 0 auto 10px
  .tit
    font-size 14px
    color #000
    line-height 24px
    padding 12px 0

  .price
    color #ff322b
    font-size 10px
    line-height 16px

.twe
  width 48%
.twe:nth-child(2n)
  float right
.twe:nth-child(2n+1)
  float left

.three
  width 32%
</style>
