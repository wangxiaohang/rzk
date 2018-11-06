<template>
<div class="main">
  <div class="content">
    <router-view></router-view>
  </div>
  <Bottom></Bottom>
</div>
</template>
<style lang="stylus" scoped>
.main
  width 100%
  height 100%
  overflow hidden
  position relative

.content
  padding 0px 8px 8px
  width 100%
  position absolute
  top 0
  bottom 60px
  overflow auto
</style>
<script>
import Bottom from '@/components/Bottom.vue'

export default {
  data () {
    return {}
  },
  components: {
    Bottom
  },
  methods: {
    change: function (index) {
      console.info(index)
    }
  }
}
</script>
