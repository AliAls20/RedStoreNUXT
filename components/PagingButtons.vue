<template>
    <div class="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&#8594;</span>
    </div>
</template>

<script>
export default {
name: 'PagingButtons'
}
</script>

<style lang="scss" scoped>
.page-btn {
    margin: 0 auto 80px;
}
.page-btn span {
    display: inline-block;
    border: 1px solid #FF523B;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
.page-btn span:hover {
    background: #FF523B;
    color: #FFF;
}
</style>