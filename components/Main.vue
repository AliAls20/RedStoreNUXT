<template>
  <div class="row">
    <div class="col-2">
      <h1>Give Your Workout<br> A New Style!</h1>
      <p>Success isn't always about greatness. It's about consistency. Consistent<br> hard work gains success. Greatness will come.</p>
      <a href="" class="btn">Explore Now &#8594;</a>
    </div>
    <div class="col-2">
      <img src="~/assets/images/image1.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 70px;
}
.col-2 {
    flex-basis: 50%;
    min-width: 300px;
}
.col-2 img {
    max-width: 100%;
    padding: 50px 0;   /* TOP BOTTOM   LEFT RIGHT*/
}
.col-2 h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
}
.btn {
    display: inline-block;
    background: #FF523B;
    color: #FFF;
    padding: 8px 30px;
    margin: 30px 0;
    border-radius: 30px;
    transition: background 0.5s;
}
.btn:hover {
    background: #563434;
}
</style>
