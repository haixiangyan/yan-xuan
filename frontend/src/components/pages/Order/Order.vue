<template>
    <div class="yan-order">
        <!-- 头部 -->
        <yan-header></yan-header>
    
        <!-- 订单详情页的内容 -->
        <div class="order-content">
            <!-- 彩色边框 -->
            <yan-color-border></yan-color-border>

            <!-- 地址部分 -->
            <div @click="toAddressList" class="yan-order-address">
                <yan-address-item v-show="address.telephone !== ''" :address="address"></yan-address-item> 

                <yan-empty-address v-show="address.telephone === ''"></yan-empty-address>
            </div>

            <!-- 订单详情 -->
            <div class="yan-order-spec-wrapper">
                <yan-order-spec ></yan-order-spec>
            </div>

            <!-- 订单的商品 -->
            <div class="yan-order-goods">
                <yan-order-good-item  v-for="(cartItem, index) in selectedCartItems" :index="index" :key="index" :cartItem="cartItem"></yan-order-good-item>
            </div>

            <!-- 同意部分 -->
            <div class="yan-agree">
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                <span>我同意</span>
                <strong>《严选平台服务协议》</strong>
            </div>
        </div>

        <!-- 脚注 -->
        <yan-order-footer></yan-order-footer>
    </div>
</template>

<script>
// 引入头部组件
import YanHeader from '@/components/commons/Header/Header';
// 引入彩色的边框
import YanColorBorder from '@/components/commons/ColorBorder/ColorBorder'
// 引入地址
import YanAddressItem from '@/components/pages/Order/AddressItem/AddressItem';
// 引入订单详情
import YanOrderSpec from '@/components/pages/Order/OrderSpec/OrderSpec';
// 引入订单的商品
import YanOrderGoodItem from '@/components/pages/Cart/CartItem/CartItem';
// 引入空的地址组件
import YanEmptyAddress from '@/components/pages/Order/EmptyAddress/EmptyAddress';
// 引入脚注组件
import YanOrderFooter from '@/components/pages/Order/Footer/Footer';

export default {
    computed: {
        cartItems() {
            return this.$store.getters.cart;
        },
        user() {
            return this.$store.getters.user;
        },
        selectedCartItems() {
            return (this.$store.getters.isBuying) ? this.$store.getters.tempCartItem : this.$store.getters.selectedCartItems;
        },
        address() {
            return this.$store.getters.address;
        }
    },
    components: {
        YanHeader,
        YanColorBorder,
        YanAddressItem,
        YanOrderSpec,
        YanOrderGoodItem,
        YanEmptyAddress,
        YanOrderFooter
    },
    methods: {
        toAddressList() {
            this.$router.push('/address-list');
        }
    }
}
</script>

<style scoped>
/* 内容 */
.order-content {
    position: fixed;
    top: 116px;
    bottom: 127px;
    left: 0;
    right: 0;
    overflow: auto;
    background: #f4f4f4;
}

/* 订单的内容 */
.yan-order-address,
.yan-order-spec-wrapper {
    background: #fff;
}

/* 订单详情 */
.yan-order-spec-wrapper {
    border-top: 25px solid #f4f4f4;
    padding-left: 35px;
}

/* 订单的商品 */
.yan-order-goods {
    border-top: 25px solid #f4f4f4;
}

/* 同意部分 */
.yan-agree {
    display: flex;
    align-items: center;
}

.yan-agree i {
    padding: 35px;
    font-size: 50px;
    color: #666;
}

.yan-agree span {
    color: #666;
}
</style>
