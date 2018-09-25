<template>
    <div class="yan-empty-cart">
        <!-- 头部 -->
        <div class="header">
            <span>30天无忧退货</span>
            <span>48小时快速退款</span>
            <span>满88元免邮费</span>
        </div>

        <!-- 内容 -->
        <div class="content">
            <img src="static/icons/empty-cart.png" alt="empty">
            <p>去添加点什么吧</p>

            <router-link tag="div" to="/login" v-show="!isLogin" class="yan-cart-login">
                登录
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isLogin() {
            return this.$store.getters.loginState.isLogin;
        },
    }
}
</script>

<style scoped>
.yan-empty-cart {
    position: fixed;
    top: 112px;
    bottom: 117px;
    left: 0;
    right: 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f4f4f4;
}

/* 头部 */
.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 35px;
    justify-content: space-around;
    align-items: center;
}

.header span {
    font-size: 32px;
    color: #666;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content img {
    width: 300px;
}

.content p {
    color: #999;
}

.yan-cart-login {
    width: 100%;
    padding: 35px;
    color: white;
    background: #b4282d;
    display: flex;
    margin-top: 35px;
    justify-content: center;
}
</style>
