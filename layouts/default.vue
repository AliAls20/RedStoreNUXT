<template>
<div class="header" :style="{background: 'radial-gradient(#FFF, ' + $store.state.primaryColor + ')'  }">
  <div class="container">
    <Nuxt />
  </div>
</div>
</template>

<style>
html {
  font-family: 'Poppins', 
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
    text-decoration: none;
    color: #555;
}
p {
    color: #555;
}

.container {
    max-width: 1300px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

.header {
  min-height: 100vh;
   /* min-height: 100%;  not necessary */
    /* background: radial-gradient(#FFF, #FFD6D6); */
}

</style>
