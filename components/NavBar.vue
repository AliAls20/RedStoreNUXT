<template>
    <div class="navbar">
        <div class="logo">
            <img src="~/assets/images/logo.png" width="125px" alt="">
        </div>
        <nav>
            <ul id="MenuItems">
                <li><NuxtLink to="/">Home</NuxtLink>
                <li><NuxtLink to="/products">Products</NuxtLink>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Account</a></li>
            </ul>
        </nav>
        <NuxtLink to="/cart"><img src="~/assets/images/cart.png" width="30px" height="30px" alt=""></NuxtLink>
        <img src="images/menu.png" class="menu-icon" alt="" onclick="menutoggle()">
    </div>
</template>

<script>
export default {
name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    padding: 20px;
}
nav { 
    flex: 1;
    text-align: right;
}
nav ul {
    display: inline-block;
    list-style-type: none;
}
nav ul li {
    display: inline-block;
    margin-right: 20px;
}

</style>