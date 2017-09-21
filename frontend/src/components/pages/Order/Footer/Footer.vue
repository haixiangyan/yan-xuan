<template>
    <div class="yan-order-footer">
        <!-- 应付 -->
        <div class="yan-total-price">
            应付：&yen;{{ordeTotalPrice}}
        </div>
    
        <!-- 付款按钮 -->
        <div @click="makeOrder" class="yan-pay">
            去付款
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cartItems() {
            return this.$store.getters.cart;
        },
        user() {
            return this.$store.getters.user;
        },
        ordeTotalPrice() {
            return this.$store.getters.ordeTotalPrice;
        },
        address() {
            return this.$store.getters.address;
        },
        selectedCartItems() {
            return (this.$store.getters.isBuying) ? this.$store.getters.tempCartItem : this.$store.getters.selectedCartItems;
        },
        isBuying() {
            return this.$store.getters.isBuying;
        }
    },
    methods: {
        makeOrder() {
            let data = {};
            let url = '';

            // 判断是不是立即购买
            if (this.isBuying) {
                data = {
                    address: this.address,
                    userID: this.user.userID,
                    totalFee: this.ordeTotalPrice,
                    goodsID: this.selectedCartItems[0].ID,
                    type: this.selectedCartItems[0].type,
                    number: this.selectedCartItems[0].number,
                    name: this.selectedCartItems[0].name,
                    price: this.selectedCartItems[0].price,
                    picture: this.selectedCartItems[0].picture,
                    address: this.address,
                    totalFee: this.ordeTotalPrice,
                    userID: this.user.userID
                };

                url = '/goods/order'
            }
            else {
                data = {
                    goodsList: this.selectedCartItems,
                    address: this.address,
                    totalFee: this.ordeTotalPrice,
                    userID: this.user.userID
                };

                url = '/shop/order'
            }

            // 发送请求，生成订单
            this.$http({
                method: 'post',
                url: `${url}`,
                body: JSON.stringify(data)
            })
                .then((res) => {
                    // 判断是否立即购买
                    if (this.isBuying) {
                        this.$store.commit('resetBuying');
                    }
                    else {
                        // 清除选中的商品
                        this.$store.commit('removeCartItems');
                    }
                    // 获取订单ID
                    this.$store.commit('setOrderID', {
                        orderID: res.body.orderID
                    })
                    // 跳转到支付页面
                    this.$router.push('/pay');
                })
                .catch((err) => {
                    console.log('vue-resource err', err);
                });
        }
    }
}
</script>

<style scoped>
.yan-order-footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(200, 200, 200);
}

/* 应付总价 */
.yan-total-price {
    padding: 35px;
    color: rgb(180, 40, 45);
    font-size: 40px;
}

/* 付款按钮 */
.yan-pay {
    padding: 45px 60px;
    background: rgb(180, 40, 45);
    color: #fff;
}
</style>
