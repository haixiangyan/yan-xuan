<template>
    <router-link to="/search" class="yan-category-search-wrapper">
        <div class="yan-category-search">
            <i class="fa fa-search" aria-hidden="true">&nbsp;</i>
            <span>搜索商品，共6757款好物</span>
        </div>
    </router-link>
</template>

<script>
export default {
}
</script>

<style scoped>
.yan-category-search-wrapper {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(200, 200, 200);
}

/* 搜索框里的内容 */
.yan-category-search {
    display: flex;
    padding: 20px 0;
    justify-content: center;
    align-items: center;
    width: 92%;
    background: rgb(237, 237, 237);
    border-radius: 10px;
}

.yan-category-search i,
.yan-category-search span {
    color: rgb(102, 102, 102);
    font-size: 36px;
}
</style>
