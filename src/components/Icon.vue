<template>
  <div class="icon" ><!--:style="setBase(Icon.className)"-->
    <a class="icon-a" :href="Icon.href">
      <img :src="Icon.Url" alt="" />
      <p>{{Icon.des}}</p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Icon',
  data () {
    return {
    }
  },
  methods: {
  },
  props: ['Icon']
}
</script>
<style>
.icon .icon-a:-webkit-any-link{
  text-decoration:none;
}
.icon a{
  display: block;
}
</style>
