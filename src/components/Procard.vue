<template>
<div :class="['procard',lines==2?'twe':'three']">
  <div class="img" :style="{'backgroundImage':'url('+info.img+')'}"></div>
  <p class="tit">{{ info.title }}</p>
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

  .img
    width 100%
    height 0
    padding-bottom 100%
    border-radius 6px
    overflow hidden
  .tit
    font-size 12px
    color #000
    line-height 24px

  .price
    color #ff322b
    font-size 10px
    line-height 16px

.twe
  width 49.5%
.twe:nth-child(2n)
  float right
.twe:nth-child(2n+1)
  float left

.three
  width 32%
</style>
