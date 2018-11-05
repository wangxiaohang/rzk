<template>
<div class="hotsite">
  <div class="item" v-for="(item,id) of hotsites" :key="id">
    <div :style="{'backgroundImage':'url('+item.img+')'}"></div>
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
      background-repeat no-repeat
      background-position center
      background-size cover

    p
      white-space nowrap
      text-overflow ellipse
      font-size 12px
      text-align center
</style>
