<template>
  <div class="small-container cart-page">
    <table>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
        <tr>
            <td>
                <div class="cart-info">
                    <img src="~/assets/images/buy-1.jpg" alt="">
                    <div>
                        <p>Red Printed Tshirt</p>
                        <small>Price:  €50.00</small>
                        <br>
                        <a href="">Remove</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value="1"></td>
            <td>€50.00</td>
        </tr>
        <tr>
            <td>
                <div class="cart-info">
                    <img src="~/assets/images/buy-2.jpg"  alt="">
                    <div>
                        <p>Red Printed Tshirt</p>
                        <small>Price:  €75.00</small>
                        <br>
                        <a href="">Remove</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value="1"></td>
            <td>€75.00</td>
        </tr>
        <tr>
            <td>
                <div class="cart-info">
                    <img src="~/assets/images/buy-3.jpg"  alt="">
                    <div>
                        <p>Red Printed Tshirt</p>
                        <small>Price:  €60.00</small>
                        <br>
                        <a href="">Remove</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value="1"></td>
            <td>€60.00</td>
        </tr>
    </table>

    <div class="total-price">
        <table>
            <tr>
                <td>Subtotal</td>
                <td>€200.00</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>€35.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>€200.00</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
export default {
name: 'Cart'
}
</script>

<style lang="scss" scoped>
.small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}
.cart-page {
    margin: 80px auto;
}
table {
    width: 100%;
    border-collapse: collapse;
}
.cart-info {
    display: flex;
    flex-wrap: wrap;
}
th {
    text-align: left;
    padding: 5px;
    color: #FFF;
    background: #FF523B;
    font-weight: normal;
}
td {
    padding: 10px 5px;
}
td input {
    width: 40px;
    height: 30px;
    padding: 5px;
} 
td a {
    color: #FF523B;
    font-size: 12px;
}
td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}
.total-price {
    display: flex;
    justify-content: flex-end;
}
.total-price table {
    border-top: 3px solid #FF523B;
    width: 100%;
    max-width: 400px;
}
td:last-child {
    text-align: right;
}
th:last-child {
    text-align: right;
}

</style>