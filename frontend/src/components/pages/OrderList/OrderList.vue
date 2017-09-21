<template>
    <div class="yan-order-list">
        <!-- 头部 -->
        <yan-header></yan-header>
    
        <!-- 导航条 -->
        <div class="yan-order-navbar">
            <div 
                v-for="(orderCategory, index) in orderCategories"
                :key="index"
                @click="selectOrderCategory(index)"
                :class="['yan-order-navbar-item', {'is-active': selectedIndex === index}]">
                {{orderCategory}}
            </div>
        </div>

        <!-- 订单列表 -->
        <div class="yan-orders">
            <!-- 订单 item -->
             <yan-order-item 
                class="yan-order-item"
                v-for="(orderItem, index) in filteredOrder" 
                :key="index" 
                :orderItem="orderItem">
            </yan-order-item> 

            <!-- 空的订单 -->
            <yan-empty-order v-show="filteredOrder.length === 0"></yan-empty-order>
        </div>
    </div>
</template>

<script>
// 引入头部组件
import YanHeader from '@/components/commons/Header/Header';
// 引入空的订单组件
import YanEmptyOrder from '@/components/pages/OrderList/EmptyOrder/EmptyOrder';
// 引入订单的每个小项
import YanOrderItem from '@/components/pages/OrderList/OrderItem/OrderItem';

export default {
    data() {
        return {
            orderListInfo: [],
            orderCategories: [
                '全部',
                '未付款',
                '已付款',
                '已发货',
                '已确认',
                '已评价'
            ],
            selectedIndex: 0
        }
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        filteredOrder() {
            /*
                0：表示全部
                1：表示未付款，
                2：表示已付款，
                3：表示已发货，
                4：表示已确认收货，
                5：表示已评价
            */
            if (this.selectedIndex === 0) {
                return this.orderListInfo;
            }
            else {
                return this.orderListInfo.filter((order) => {
                    return (order.orderState+1) === this.selectedIndex;
                });
            }
        }
    },
    components: {
        YanHeader,
        YanEmptyOrder,
        YanOrderItem
    },
    methods: {
        selectOrderCategory(index) {
            this.selectedIndex = index;
        }
    },
    mounted() {
        // 发送请求，获取订单的详情
        this.$http({
            method: 'get',
            url: `/shop/customerOrder/${this.user.userID}`
        })
            .then((res) => {
                this.orderListInfo = res.body.order;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
} 
</script>

<style scoped>
/* 导航条 */
.yan-order-navbar {
    margin-top: 117px;
    display: flex;
    padding: 0 35px;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid rgb(200, 200, 200)
}

.yan-order-navbar-item {
    padding: 30px 20px;
}

/* 激活状态 */
.is-active {
    border-bottom: 6px solid rgb(180, 40, 45);
    color: rgb(180, 40, 45);
}

/* 订单的列表 */
.yan-orders {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 218px;
    overflow: auto;
    background: #f4f4f4;
}

/* 订单的子项 */
.yan-order-item {
    margin-top: 25px;
}
</style>
