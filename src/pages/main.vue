<template>
<div class="main">
  <div class="content">
    <transition name='content-fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
  <Bottom></Bottom>
</div>
</template>
<style lang="stylus" scoped>
.content
  padding 0px 0px 60px
  position relative
.content-fade-enter-active, .content-fade-leave-active
  transition opacity .1s ease
.content-fade-enter, .content-fade-leave-to
  opacity 0
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
