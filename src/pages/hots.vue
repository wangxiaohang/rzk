<template>
<div id="hot">
  <Header :title="'热租商品'" :backpath="'/index'"></Header>
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
