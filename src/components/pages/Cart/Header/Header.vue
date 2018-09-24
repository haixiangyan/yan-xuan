<template>
    <div class="yan-cart-header">
        <span class="yan-cart-title">购物车</span>
    
        <span v-show="isEditCart && cart.length !== 0" @click="finishEdit" class="yan-cart-finish">完成</span>
        <span v-show="!isEditCart && cart.length !== 0" @click="editCart" class="yan-cart-edit">编辑</span>
    </div>
</template>

<script>
export default {
    computed: {
        isEditCart() {
            return this.$store.getters.isEditCart;
        },
        user() {
            return this.$store.getters.user;
        },
        cart() {
            return this.$store.getters.cart;
        }
    },
    methods: {
        editCart() {
            this.$store.commit('toggleEditCart');
        },
        finishEdit() {

            let data = {
                userID: this.user.userID,
                cartList: this.cart
            }

            this.$http({
                method: 'post',
                url: `/shop/changeCart`,
                body: JSON.stringify(data)
            })
                .then((res) => {
                    this.$store.commit('updateCartItems');
                    console.log('finish edit successfully!');
                })
                .catch((err) => {
                    console.log('vue-resource err', err);
                });

            this.$store.commit('toggleEditCart');
            console.log('finish edit')
        }
    }
}
</script>

<style scoped>
.yan-cart-header {
    padding: 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    border-bottom: 1px solid rgb(200, 200, 200);
    background: #fff;
    z-index: 5;
}

.yan-cart-title {
    font-size: 50px;
}

.yan-cart-edit,
.yan-cart-finish {
    position: absolute;
    right: 35px;
    font-size: 40px;
}
</style>
