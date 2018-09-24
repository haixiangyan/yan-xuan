<template>
    <div class="yan-search-header">
        <!--头部 logo 部分-->
        <div class="yan-logo-wrapper">
            <router-link to="/">网易严选</router-link>
        </div>
    
        <router-link to="/search" class="yan-search-wrapper">
            <i class="fa fa-search" aria-hidden="true">&nbsp;</i>
            <span>搜索商品，共6757款好物</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: ''
        }
    }
}
</script>

<style scoped>
.yan-search-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 30px;
}
/*logo 部分样式*/

.yan-logo-wrapper {
    display: inline-block;
    padding: 0 20px;
}

.yan-logo-wrapper a {
    font-size: 42px;
}

/*搜索框部分样式*/

.yan-search-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 75px;
    flex-grow: 1;
    background: rgb(237, 237, 237);
    border-radius: 8px;
}

.yan-search-wrapper a,
.yan-search-wrapper i {
    color: rgb(102, 102, 102);
    font-size: 36px;
}
</style>
