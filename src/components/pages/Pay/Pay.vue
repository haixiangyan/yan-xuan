<template>
    <div class="yan-pay">
        <!-- 头部 -->
        <yan-header></yan-header>

        <!-- 内容 -->
        <div class="yan-pay-content">
            <h3>请选择支付方式</h3>

            <div class="payment-way">
                <!-- 支付宝的支付方式 -->
                <div v-for="(paymentWay, index) in paymentWays" :key="index" @click="selectPaymentWay(index)" class="payway">
                    <i v-show="selectedIndex !== index" class="fa fa-circle-o" aria-hidden="true"></i>
                    <i v-show="selectedIndex === index" class="fa fa-check-circle-o" aria-hidden="true"></i>

                    <img :src="paymentWay.img" alt="payment way">

                    <span>{{paymentWay.name}}</span>
                </div>                
            </div>
        </div>

        <!-- 确定按钮 -->
        <div @click="toPay" class="yan-confirm">
            确定
        </div>
    </div>
</template>

<script>
// 引入头部
import YanHeader from '@/components/commons/Header/Header';

export default {
    data() {
        return {
            selectedIndex: 0,
            paymentWays: [
                {
                    img: 'static/icons/alipay.png',
                    name: '支付宝'
                },
                {
                    img: 'static/icons/wechat.png',
                    name: '微信支付'
                }
            ]
        }
    },
    computed: {
        orderID() {
            return this.$store.getters.orderID;
        }
    },
    components: {
        YanHeader
    },
    methods: {
        selectPaymentWay(index) {
            this.selectedIndex = index;
        },
        toPay() {
            switch(this.selectedIndex) {
                case 0: 
                    // 发送请求，请求支付宝支付
                    this.$http({
                        method: 'post',
                        url: `/shop/pay`,
                        body: JSON.stringify({
                            orderID: this.orderID,
                            payID: new Date().getTime()
                        })
                    })
                        .then((res) => {
                            this.$router.push('/order-list');
                        })
                        .catch((err) => {
                        });
                    break;
                case 1:
                    // 发送请求，请求微信支付
                    this.$http({
                        method: 'post',
                        url: `/shop/pay`,
                        body: JSON.stringify({
                            orderID: this.orderID,
                            payID: new Date().getTime()
                        })
                    })
                        .then((res) => {
                            this.$router.push('/order-list');
                        })
                        .catch((err) => {
                        });
                    break;
            }
        }
    }
}
</script>

<style scoped>
.yan-pay-content {
    position: fixed;
    top: 117px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f4f4f4;
    padding-top: 60px;
}

.yan-pay-content h3 {
    color: #999;
    padding: 35px 0 35px 35px;
}

/* 支付方式 */
.payment-way {
    background: #fff;
    padding-left: 35px;
}

.fa {
    font-size: 50px;
    padding: 45px 45px 45px 0;
}

.fa-circle-o {
    color: #999;
}

.fa-check-circle-o {
    color: rgb(180, 40, 45);
}

/* 支付宝支付方式 */
.payway {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999;
}

.payway img {
    width: 60px;
    padding-right: 35px;
}

/* 确定按钮 */
.yan-confirm {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 45px;
    color: #fff;
    background: rgb(180, 40, 45);
}
</style>
