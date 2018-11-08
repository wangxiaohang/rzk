<template>
<div id="user">
  <div class="info">
    <i class="pao"></i><i class="pao"></i><i class="pao"></i>
    <p class="name">半亩花田</p>
    <p class="des">唯有热爱，方能抵御岁月漫长</p>
    <div class="avator"></div>
    <span class="toset">&gt;</span>
  </div>
  <div class="order">
    <div class="item list">
      我的的订单<span>全部订单<i class="goto">&gt;</i></span>
      <div class="cates">
        <div class="cate topay"><div class="img"></div><p>待付款</p></div>
        <div class="cate tosend"><div class="img"></div><p>待发货</p></div>
        <div class="cate torecieve"><div class="img"></div><p>待收货</p></div>
        <div class="cate toback"><div class="img"></div><p>待归还</p></div>
        <div class="cate hasback"><div class="img"></div><p>已归还</p></div>
      </div>
    </div>
    <div class="item stars goto">我的收藏<i class="goto">&gt;</i></div>
    <div class="item server goto">客服中心<i class="goto">&gt;</i></div>
    <div class="item device goto">意见反馈<i class="goto">&gt;</i></div>
    <div class="item setting goto">设置<i class="goto">&gt;</i></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {}
  },
  created: function () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
  #user
    position absolute
    left 0
    right 0
    overflow hidden
    .info
      height 150px
      color white
      background #FFC13C
      padding-top 46px
      position relative
      i.pao
        position absolute
        opacity .2
        border-radius 50%
        background #fff
      i.pao:nth-of-type(1)
        width 180px
        height 180px
        left -65px
        top -93px
      i.pao:nth-of-type(2)
        width 100px
        height 100px
        right -25px
        top -33px
      i.pao:nth-of-type(3)
        width 150px
        height 150px
        right -25px
        bottom -53px
      .name
        font-size 18px
        line-height 38px
        padding 0 90px 0 8px
        white-space nowrap
      .des
        padding 0 90px 0 8px
        font-size 12px
        line-height 18px
        white-space nowrap
      .avator
        position absolute
        top 50%
        right 30px
        transform translateY(-50%)
        width 50px
        height 50px
        border-radius 50%
        background url('../assets/img/04.png') no-repeat center/cover
      .toset
        position absolute
        top 50%
        right 0
        transform translateY(-50%)
        width 30px
        height 30px
        text-align center
        line-height 30px
        text-style none
    .order
      position relative
      border-radius 14px 14px 0 0
      top -15px
      background #fff
      padding-top 16px
      .item
        font-size 14px
        color #000
        line-height 40px
        padding 0 8px
        .cates
          padding 4px 10px
          display flex
          justify-content space-between
          .topay .img
            background-image url('../assets/img/order2.png')
          .tosend .img
            background-image url('../assets/img/order3.png')
          .torecieve .img
            background-image url('../assets/img/order1.png')
          .toback .img
            background-image url('../assets/img/order4.png')
          .hasback .img
            background-image url('../assets/img/order5.png')
          .cate p
            font-size 10px
            line-height 14px
            color #333
          .cate .img
            width 30px
            height 30px
            margin 0 auto 5px
        .goto
          color #ccc
          float right
          font-style normal
          width 16px
          text-align center
          margin-left 8px
        span
          color #ccc
          float right
          font-size 12px
</style>
