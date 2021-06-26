<template>
    <div>
        <div class="small-container single-product">
            <div class="row">
                <div class="col-2">
                    <img src="~/assets/images/gallery-1.jpg" width="100%" alt="" id="ProductImg">

                    <div class="small-img-row">
                        <div class="small-img-col">
                            <img src="~/assets/images/gallery-1.jpg" width="100%" class="small-img">
                        </div>
                        <div class="small-img-col">
                            <img src="~/assets/images/gallery-2.jpg" width="100%" class="small-img">
                        </div>
                        <div class="small-img-col">
                            <img src="~/assets/images/gallery-3.jpg" width="100%" class="small-img">
                        </div>
                        <div class="small-img-col">
                            <img src="~/assets/images/gallery-4.jpg" width="100%" class="small-img">
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <p>Home / T-Shirt</p>
                    <h1>Red Printed T-Shirt by HRX</h1>
                    <h4>$50.00</h4>
                    <select>
                        <option disabled selected>Select Size</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>L</option>
                        <option>M</option>
                        <option>S</option>
                    </select>
                    <input type="number" value="1">
                    <a href="" class="btn">Add To Cart</a>
                    <h3>Product Details <i class="fa fa-indent"></i></h3>
                    <br>
                    <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.</p>
                </div>
            </div>
        </div>

        <!-- Title -->
        <div class="small-container">
            <div class="row row-2">
                <h2>Related Products</h2>
                <p>View More</p>
            </div>
        </div>

        <!-- Products -->
        <div class="small-container">
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
        </div>

    </div>
</template>

<script>
export default {
name: 'ProductDetails'
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
    margin-top: 70px;
}

.row-2 {
    justify-content: space-between;
    margin: 100px auto 50px;
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

.single-product {
    margin-top: 80px;
}
.single-product .col-2 img {
    padding: 0;
}
.single-product .col-2 {
    padding: 20px;
}
.single-product h4 {
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
}
.single-product select {
    display: block;
    padding: 10px;
    margin-top: 20px;
}
.single-product input {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid #FF523B;
}

select {
    border: 1px solid #FF523B;
    padding: 5px;
}
select:focus {
    outline: none;
}

input:focus {
    outline: none;
}
.single-product .fa {
    color: #FF523B;
    margin-left: 10px;
}
.small-img-row {
    display: flex;
    justify-content: space-between;
}
.small-img-col {
    flex-basis: 24%; /* So there will be 1% space between each column*/
    cursor: pointer;
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