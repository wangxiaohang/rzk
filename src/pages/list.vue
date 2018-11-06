<template>
<div id="hot">
  <Header :title="'精选商品'" :backpath="'/main/index'"></Header>
</div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'hot',
  data () {
    return {}
  },
  components: {
    Header
  }
}
</script>
