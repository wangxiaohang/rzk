<template>
<div :class="[classname,'playcard']">
  <p class="title">{{ title }}</p>
  <p class="des">{{ des }}</p>
  <i>&gt;</i>
</div>
</template>
<script>
export default {
  props: ['title', 'des', 'classname']
}
</script>
<style scoped lang="stylus">
common-border-radius = 6px
.playcard
  width 48.5%
  border-radius common-border-radius
  color #fff
  position relative
  height 100px
  padding 10px
  overflow hidden

  .title
    font-size 16px
    line-height 20px
  .des
    font-size 12px
    line-height 26px
  i
    display block
    width 16px
    height 16px
    border-radius 50%
    text-align center
    line-height 16px
    background #fff
    font-style normal
    padding-left 2px
    font-weight bold
    margin-top 5px

.playcard::before,.playcard::after
  content ''
  position absolute
  width 80px
  height 80px
  border-radius 40px
  background #fff
  opacity .2
.playcard::before
  right -32px
  top -32px
.playcard::after
  right -26px
  bottom -12px

.left
  background: linear-gradient(left, #6FDAFF, #4093FC)
  i
    color #4093FC
.right
  background: linear-gradient(left, #FAD16C, #FFA200)
  i
    color #FFA200
</style>
