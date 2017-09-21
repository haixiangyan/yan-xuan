<template>
    <div class="yan-good-footer">
        <!-- 联系店家 -->
        <div tag="div"  class="yan-contact">
            <img @click="toService" v-if="!isBack" src="/static/icons/service.png" alt="contact">
            <span @click="back" v-if="isBack">返回</span>
        </div>
    
        <!-- 立即购买 -->
        <div @click="buying" class="yan-buy">
            立即购买
        </div>
    
        <!-- 加入购物车 -->
        <div @click.prevent="addToCart" class="yan-add-cart">
            加入购物车
        </div>

        <!-- 模态框 -->
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <yan-modal  v-show="isShowModal" :title="'添加到购物车'"></yan-modal>
        </transition>
    </div>
</template>

<script>
// 引入模态框
import YanModal from '@/components/commons/Modal/Modal';

export default {
    props: ['isBack'],
    data() {
        return {
            isShowModal: false
        }
    },
    computed: {
        goodInfo() {
            return this.$store.getters.good;
        },
        selection() {
            return this.$store.getters.selection;
        },
        user() {
            return this.$store.getters.user;
        },
        loginState() {
            return this.$store.getters.loginState;
        }
    },
    components: {
        YanModal
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        // 立刻购买
        buying() {
            if (!this.loginState.isLogin) {
                this.$router.push('/login');
                return ;
            } 

            let tempGoodInfo = {
                name: this.goodInfo.topName,
                ID: this.goodInfo.ID,
                price: this.goodInfo.price,
                select: 0,
                number: this.selection.num,
                type: this.goodInfo.type[this.selection.type],
                picture: this.goodInfo.headImage[0]
            }

            this.$store.commit('buying', {
                goodInfo: tempGoodInfo
            });

            // 跳转到订单详情页
            this.$router.push('/order');
        },
        addToCart() {
            if (!this.loginState.isLogin) {
                this.$router.push('/login');
                return ;
            } 

            // 将商品加入购物车
            this.$store.commit('addToCart', {
                cartItem: {
                    id: this.$route.params.goodId,
                    number: this.selection.num,
                    type: this.goodInfo.type[this.selection.type]
                }
            });

            // 更新头部的数字
            this.$store.commit('addDisplayCartNum');

            // 发送请求，加入到购物车
            this.$http({
                method: 'POST',
                url: `/shop/addToCart`,
                body: {
                    ID: this.$route.params.goodId,
                    type: this.goodInfo.type[this.selection.type],
                    number: this.selection.num,
                    userID: this.user.userID
                },
            })
                .then((res) => {
                    this.isShowModal = true;

                    setTimeout(() => {
                        this.isShowModal = false;
                    }, 1000)
                })
                .catch((err) => {
                    console.log('vue-resource err', err);
                });
        },
        toService() {
            this.$router.push('/chat');
        }
    }
}
</script>

<style>
.yan-good-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    border-top: 1px solid #666;
}


/* 联系商家 */

.yan-contact {
    padding: 30px 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #666;
    flex-grow: 1;
    background: #fff;
    line-height: 70px;
}

.yan-contact img {
    max-width: 70px;
}

.yan-buy,
.yan-add-cart {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
}

.yan-buy {
    background: #fff;
}

.yan-add-cart {
    background: rgb(180, 40, 45);
    color: #fff;
}
</style>
