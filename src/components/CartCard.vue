<template>
  <div class="shop">
    <div class="choosebtn">
      <span :class="spanClassName" :id="'btn_'+id" v-on:click="choose(id)"></span>
    </div>
    <div class="img" :style="{'backgroundImage':'url('+info.img+')'}"></div>
    <div class="right">
      <p class="tit">{{ info.title }}</p>
      <p class="notice">{{ info.description }} <span>x{{ info.num }}</span></p>
      <p class="price">租金:<i>￥{{ info.price }}</i> <span>{{ info.days }}天</span></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      spanClassName: 'none'
    }
  },
  watch: {
    all: function () { // 监听父组件的变化
      this.spanClassName = this.all
    }
  },
  methods: {
    choose: function (id) {
      if (this.spanClassName === 'none') {
        this.spanClassName = 'check'
      } else {
        this.spanClassName = 'none'
      }
    }
  },
  props: ['info', 'all', 'id']
}
</script>
<style scoped lang="stylus">
  color_blue = #1eb4ff
  .shop
    width 100%
    margin-bottom 20px
    display flex
    .choosebtn
      width 30px
      position relative
      span.none
        display inline-block
        width 12px
        height 12px
        border 1px solid gray
        border-radius 6px
        position absolute
        top 30px
        left 6px
      span.check
        display inline-block
        width 14px
        height 14px
        border 1px solid color_blue
        background-color color_blue
        border-radius 7px
        position absolute
        top 30px
        left 6px
      span.check:before
        content "\221A"
        display inline-block
        font-size 12px
        width 14px
        height 14px
        color #fff
        position absolute
        left 1px
        bottom 0
        -webkit-transform  rotate(20deg)
        -moz-transform  rotate(20deg)
    .img
      width 80px
      height 80px
      border-radius 6px
      overflow hidden
    .right
      width 70%
      padding-left 4%
      p
       height 20px
       line-height 20px
       font-size 12px
      .tit
        color #000
        font-size 14px
      .notice
        color #989898
        margin 0 0 20px
        font-size 10px
        span
         padding-left 20px
      .price
        color #000
        i
         font-style normal
         color #ff322b
        span

          display inline-block
          float right

</style>
