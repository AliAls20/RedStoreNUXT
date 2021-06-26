<template>
  <div>
    <NavBar></NavBar>
    <Products/>
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