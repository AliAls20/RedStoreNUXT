<template>
      <div class="small-container">
        <div class="row row-2">
            <h2>All Products</h2>
            <select name="" id="">
                <option value="">Default sorting</option>
                <option value="">Sort by price</option>
                <option value="">Sort by popularity</option>
                <option value="">Sort by rating</option>
                <option value="">Sort by sale</option>
            </select>
        </div>
        <div class="row">
            <div class="col-4">
                <NuxtLink to="/product-details">
                     <img src="~/assets/images/product-1.jpg" alt="">
                </NuxtLink>
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€50</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-2.jpg" alt="">
                <h4>Shoes</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€65</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-3.jpg" alt="">
                <h4>Jeans</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>€35</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-4.jpg" alt="">
                <h4>Blue Printed T-shirt</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€50</p>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <img src="~/assets/images/product-5.jpg" alt="">
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€50</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-6.jpg" alt="">
                <h4>Shoes</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€65</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-7.jpg" alt="">
                <h4>Jeans</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>€35</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-8.jpg" alt="">
                <h4>Blue Printed T-shirt</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€50</p>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <img src="~/assets/images/product-9.jpg" alt="">
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€50</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-10.jpg" alt="">
                <h4>Shoes</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€65</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-11.jpg" alt="">
                <h4>Jeans</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>€35</p>
            </div>
            <div class="col-4">
                <img src="~/assets/images/product-12.jpg" alt="">
                <h4>Blue Printed T-shirt</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>€50</p>
            </div>
        </div>
    <PagingButtons/>
    </div>
</template>

<script>
export default {
name: 'Products'
}
</script>

<style lang="scss" scoped>
.small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.row-2 {
    justify-content: space-between;
    margin: 100px auto 50px;
}
select {
    border: 1px solid #FF523B;
    padding: 5px;
}
select:focus {
    outline: none;
}

.col-4 {
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
}
.col-4 img {
    width: 100%;
}
.title {
    text-align: center;
    margin: 0 auto 80px;
    position: relative;
    line-height: 60px;
    color: #555;
}
.title:after {
    content: '';
    background: #FF523b;
    width: 80px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%)
}
h4 {
    color: #555;
    font-weight: normal;
}
.col-4 p {
    font-size: 14px;
}
.rating {
    color: #FF523B;
}
.col-4:hover {
    transform: translateY(-5px)
}
</style>