<template>
  <div>
    <NavBar></NavBar>
    <Main></Main>
  </div>
</template>

<script>

export default {
    mounted(){
    this.$store.commit('switchToHomeBackground')
  }
}
</script>

<style>

</style>
