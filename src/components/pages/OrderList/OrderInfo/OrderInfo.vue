<template>
    <div class="yan-order-info">
        <!-- 头部 -->
        <div class="yan-order-header">
            <!-- 下单时间 -->
            <div class="order-date">
                下单时间：{{orderDate}}
            </div>
            <!-- 订单编号 -->
            <div class="order-id">
                订单编号：{{this.orderInfo.orderID}}
            </div>
        </div>

        <!-- 商品详情 -->
        <div class="yan-order-goods">
            <div class="order-goods-title">
                <div>
                    商品列表
                </div>
            </div>

            <yan-order-good 
                v-for="(orderGoodItem, index) in orderInfo.goodsList" 
                :key="index" 
                :orderGoodItem="orderGoodItem"
                :orderID="orderInfo.orderID"
                :orderState="orderInfo.orderState">
            </yan-order-good>
        </div>

        <!-- 用户个人信息 -->
        <div class="yan-user-info">
            <div>
                <!-- 用户名 -->
                <span class="user-name">{{orderInfo.address[0].receiver}}</span>
                <!-- 用户电话 -->
                <span class="user-telephone">{{orderInfo.address[0].telephone}}</span>
            </div>

            <div class="user-address">
                {{`${orderInfo.address[0].province}${orderInfo.address[0].city}${orderInfo.address[0].town}${orderInfo.address[0].detail}`}}
            </div>

            <!-- 商品价格 -->
            <div class="price">
                商品合计：{{orderInfo.totalFee}}
            </div>
        </div>

        <!-- 服务 -->
        <div class="yan-order-service">
            <div>
                服务时间：9:00-22:00
            </div>

            <div class="serivce-btns">
                <div class="service-btn">
                    <i class="fa fa-headphones" aria-hidden="true"></i>
                    在线客服
                </div>

                <div class="service-btn">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    电话客服
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入商品的组件
import YanOrderGood from '@/components/pages/OrderList/Good/Good';

export default {
    data() {
        return {
            orderInfo: {
                address: [
                    {
                        receiver: '',
                        telephone: ''
                    }
                ]
            }
        }
    },
    computed: {
        orderDate() {
            let date = new Date(Number.parseInt(this.orderInfo.orderDate));
            return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        }
    },
    components: {
        YanOrderGood
    },
    mounted() {
        // 发送请求，获取订单的详情
        this.$http({
            method: 'get',
            url: `/shop/order/${this.$route.params.orderId}`
        })
            .then((res) => {
                this.orderInfo = res.body.order;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部 */
.yan-order-header {
    padding: 35px;
}

.order-date {
    margin-bottom: 19px;
}

/* 商品详情 */
.yan-order-goods {
    border-top: 25px solid #f4f4f4;
}

.order-goods-title {
    padding-left: 35px;
}

.order-goods-title div {
    padding: 35px 0;
    border-bottom: 1px solid rgb(200, 200, 200);
}

/* 用户信息 */
.yan-user-info {
    padding: 35px 0 35px 35px;
    border-top: 25px solid #f4f4f4;
}

.user-name {
    margin-right: 45px;
}

.user-address {
    margin-top: 19px;
    padding-bottom: 35px;
    border-bottom: 1px solid rgb(200, 200, 200);
}

.price {
    padding: 35px 0;
    border-bottom: 1px solid rgb(200, 200, 200);
}

/* 服务 */
.yan-order-service {
    border-top: 25px solid #f4f4f4;
    padding: 35px;
}

.serivce-btns {
    margin-top: 35px;
    display: flex;
    justify-content: space-around;
}

.service-btn {
    width: 400px;
    padding: 23px 0;    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    color: #666;
    border: 1px solid #666;
    border-radius: 6px;
}

.service-btn i {
    padding: 0 10px;
    font-size: 38px;
    color: #666;
}
</style>
