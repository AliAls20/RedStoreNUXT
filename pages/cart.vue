<template>
  <div>
      <NavBar></NavBar>
      <Cart></Cart>
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