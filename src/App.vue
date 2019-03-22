<template>
  <div class="app">
    <transition name='app-fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang='stylus'>
  .app-fade-enter-active, .app-fade-leave-active
    transition opacity .2s ease
  .app-fade-enter, .app-fade-leave-active
    opacity 0
</style>
