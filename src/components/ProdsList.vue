<template>
  <div class="proList clearfix" v-if="pros">
    <div class="pro" v-for="(pro,id) in pros" :key="id">
      <div class="img" :style="{backgroundImage: 'url('+pro['img']+')'}"></div>
      <p class="title">{{ pro['title'] }}</p>
      <div class="info">
        <p class="price"><em>￥</em>{{ pro['sale'] }}<span :if='pro.price'>￥{{ pro['price'] }}</span></p>
        <p class="star" :if='pro.cfav'>{{ pro['cfav'] }}<i></i></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['pros']
}
</script>
<style lang="stylus" scoped>
  .proList .pro
    width 48%
    .img
      width 100%
      height 198px
      border-radius 6px
    .title
      font-size 14px
      line-height 24px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      width 100%
      color #000
      font-weight normal
    &:nth-child(2n)
      float left
    &:nth-child(2n+1)
      float right
    .info
      line-height 30px
      overflow hidden
      padding 0 0 5px
      .price
        color red
        float left
        font-weight bold
        em
          font-style normal
          font-weight normal
        span
          font-weight normal
          color #666666
          text-decoration:line-through
          font-size 12px
          margin-left 6px
      .star
        float right
        font-size 12px
        i
          display inline-block
          margin-top 8px
          margin-left 2px
          vertical-align top
          width 14px
          height 14px
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEZklEQVRYR8WWX2gcVRTGv3NnF0mt7gZRtMYasSKiCBWsESO1sX8svviSgvgPBQOaTO4dCRRbNFOtUmVx793dEA1CEaMveVGQ0qQaqxSrILYqgsUU0xqDCDa7YoQ0O3PkhtkQ0t0ks23thX3Y4Z75fuebc8+5hEu86BLro24A13WvFkK8BkAkk8ldmUzmz3qSqRtASjlKRJsi0VGt9YP/G4Drui2O4xxdKBgEwb35fP7ruBB1OSClHCGiLQC+iAQ3AhjRWm+76ACu6653HOe7SGhTGIYkhBi1/4MguCufzx+LAxHbAaXUAQDbmfkbY0yLFZNSHiWiFmY+YIx5+KIBLM5ea33Yiiml2gB8Vo8LK3bA9/1EsVg8BOCBhdlXsq24AOBwOp3e4vt+eSVO1ASwgqVSqTkIgnVEZH9PANgAIAzD8P5cLvfVQgGl1H0AvrR9wQICGGTmMcdxxlKp1HgtoHkAz/O2MvMjAG4GsI6ZbyQiZ3EWzLzbGPN6teyUUrsB7K0SExDRKQBjAE4S0UfZbHbE7psDkFJuI6KD1V7KzDNE9BszH2Pm/lwu9/lS1tp6YObnAdwJoJmIktX2h2G4PZfLHawAeET0lt3IzJ8w8wdCCEs8rrX+wz5eyfessoeUUtcGQWDdbBZCPGlPUKQz5+QcQNTXjxPRGpsxgM3GmCN1ilYNk1K2AviUiC5j5skgCO4uFAqT8zUgpVxLRFb0Bmb+F0CbMcYW03mvSHyYiFYBsJ+z1Rhzer4GKgpdXV1rHMc5QkQ3MfM/kRPnBSGlvAeAHVyrmPnXIAhabeYVzXOOYU9PzzWzs7MW4hYLQUQbtdaV1hvLjUjc2r6amX9JJpOti8d21T7Q2dl5VSKRsNS2ks9YmGw2eyaOelRXJ4iokZl/KJfLbX19fX8tfkfNRuS67pVCiG8jJ942xjwXB0Ap9Q6ADmY+EYbhhnw+/3e1+CVbsed5kpk1Mw8bYx6KCWDb9mYAXVrrvlqxSwJIKXcS0b46AYYBbAWwU2v9Zl0ASqlBAI8B0FprL44DUkpDRN0A3tda2wZUdS3nwPdRIT6rtX43DoDnefb72zo4rrVeHxvA931RLBZn7XRbfN9TSjUDeAPADgCnmPljIspqrccrQtF0tI3tbDqdbvB9P4xVhN3d3XcIIX60QYlEYnUmk5m2xzOZTL5kh02VIXMWQP/MzMye/v7+qZ6ensvL5bJtZiiXy7cVCoWfYwEopR4F8CEzny6VSremUilFRLsAXBENk5MA5gYYgBeIyI5xu0rMvK9UKulUKmVHr50vO4wxQ3EB7Mx/EcDvzEz2RRVhIcSrExMTg0NDQ4F91t7e7jQ1NT0ehmGvbePRvkkbBOA6Zn7FGNMbF0Dbq8KCoHFm3tvY2PherduNvUVNTU09BeBlIlq7ILbmKap5CjzPuz0Mw/0ArhdC7Jment4/MDBgi3LZ1dHRkWxoaHiGiHqZeUII8XQ2m/0plgPLqlygDSu+FV8gvXNe8x+ubgg/QgZeRgAAAABJRU5ErkJggg==') no-repeat center/cover
</style>
