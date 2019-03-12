<template>
  <div>
   <router-view/>
    <FooterGuide v-if="!$route.path.includes('login') && !$route.path.includes('search')"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
   components:{
     FooterGuide
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
