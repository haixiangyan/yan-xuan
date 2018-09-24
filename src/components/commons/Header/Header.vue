<template>
    <div class="yan-header">
        <!-- 回到首页 -->
        <div class="yan-header-home">
            <router-link to="/">
                <img src="/static/icons/home.png" alt="search">
            </router-link>
        </div>
    
        <!-- 头部标题 -->
        <div class="yan-header-title">
            网易严选
        </div>

        <!-- 尾部 -->
        <div class="yan-header-footer">
            <!-- 搜索 -->
            <router-link to="/search">
                <img src="/static/icons/search.png" alt="search">
            </router-link>

            <!-- 购物车 -->
            <router-link to="/cart">
                <img src="/static/icons/cart.png" alt="search">
                <yan-badge v-show="displayCartNum!==0" :num="displayCartNum"></yan-badge>
            </router-link>
        </div>
    </div>
</template>

<script>
// 引入 badge
import YanBadge from '@/components/commons/Badge/Badge';

export default {
    computed: {
        displayCartNum() {
            return this.$store.getters.displayCartNum;
        }
    },
    components: {
        YanBadge
    }
}
</script>

<style scoped>
i {
    color: #666;
}

img {
    max-width: 70px;
}

.yan-header {
    padding: 20px 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(250, 250, 250);
    border-bottom: 1px solid rgb(200, 200, 200);
    z-index: 5;
}

/* 头部标题 */
.yan-header-title {
    font-size: 45px;
}

/* 标题的尾部 */
.yan-header-footer {
    position: relative;
}
</style>

