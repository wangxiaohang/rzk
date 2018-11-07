<template>
<div class="hotsite clearfix">
  <div class="item" v-for="(item,id) of hotsites" :key="id">
    <div class="img" :style="{'backgroundImage':'url('+item.img.url+')'}"></div>
    <p>{{ item.title }}</p>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['hotsites']
}
</script>
<style lang="stylus" scoped>
.hotsite
  margin-top 5px
  .item
    width 25%
    overflow hidden
    float left
    padding 0 10px 10px

    div
      width 40px
      height 40px
      margin 6px auto

    p
      white-space nowrap
      text-overflow ellipse
      font-size 12px
      text-align center
</style>
