<template>
    <div class="yan-cart">
        <!-- 头部 -->
        <yan-cart-header></yan-cart-header>
    
        <!-- 购物车的子项 -->
        <div class="yan-cart-content">
            <yan-cart-item :isShowCheck="true" v-show="!isEditCart" v-for="(cartItem, index) in cartItems" :index="index" :key="index" :cartItem="cartItem"></yan-cart-item>
    
            <!-- 购物车的编辑项 -->
            <yan-edit-item v-show="isEditCart" v-for="(cartItem, index) in cartItems" :index="index" :key="index" :cartItem="cartItem"></yan-edit-item>
    
            <!-- 空的购物车的组件 -->
            <yan-empty-cart v-show="cartItems.length === 0"></yan-empty-cart>
    
            <!-- 编辑脚注 -->
            <yan-edit-cart-footer v-show="isEditCart && cartItems.length !== 0"></yan-edit-cart-footer>
    
            <yan-make-order-footer v-show="!isEditCart && cartItems.length !== 0"></yan-make-order-footer>
        </div>
    
        <!-- tab bar -->
        <yan-tab-bar :selectedIndex="3"></yan-tab-bar>
    </div>
</template>

<script>
// 引入购物车的头部组件
import YanCartHeader from '@/components/pages/Cart/Header/Header';
// 引入购物车的 item
import YanCartItem from '@/components/pages/Cart/CartItem/CartItem';
// 引入修改购物车的组件
import YanEditItem from '@/components/pages/Cart/EditItem/EditItem';
// 引入空的购物车的组件
import YanEmptyCart from '@/components/pages/Cart/EmptyCart/EmptyCart';
// 引入编辑的脚注
import YanEditCartFooter from '@/components/pages/Cart/Footer/EditCartFooter';
// 引入下单的脚注
import YanMakeOrderFooter from '@/components/pages/Cart/Footer/makeOrderFooter';
// 引入 TabBar 组件
import YanTabBar from '@/components/commons/TabBar/TabBar';

export default {
    data() {
        return {
        }
    },
    computed: {
        cartItems() {
            return this.$store.getters.cart;
        },
        isEditCart() {
            return this.$store.getters.isEditCart;
        },
        user() {
            return this.$store.getters.user;
        }
    },
    components: {
        YanCartHeader,
        YanEditItem,
        YanCartItem,
        YanEmptyCart,
        YanEditCartFooter,
        YanMakeOrderFooter,
        YanTabBar
    },
    mounted() {
        // 发送请求，获取商品的购物车
        if (this.user === null) {
            return;
        }
        this.$http({
            method: 'get',
            url: `/shop/cart/${this.user.userID}`
        })
            .then((res) => {
                // 初始化购物车的商品
                res.body.data.forEach((element) => {
                    element.select = 1;
                });

                // 将商品的购物车存到 vuex 中
                this.$store.commit('initCart', {
                    cart: res.body.data
                });
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
.yan-cart {
    /* margin-top: 112px; */
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
    background: #f4f4f4;
}

.yan-cart-content {
    position: fixed;
    top: 117px;
    left: 0;
    right: 0;
    bottom: 237px;
}
</style>
