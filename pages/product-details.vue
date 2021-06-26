<template>
  <div>
       <NavBar></NavBar>
       <ProductDetails/>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.commit('switchToProductsBackground')
  }
}
</script>

<style>

</style>