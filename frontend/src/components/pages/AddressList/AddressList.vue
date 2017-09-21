<template>
    <div class="yan-address-list">
        <!-- 头部 -->
        <yan-header></yan-header>
    
        <div class="yan-address-content">
            <!-- 彩色边框 -->
            <yan-color-border></yan-color-border>
    
            <yan-address-item 
                v-for="(address, index) in addressList" 
                v-on:removeAddress="removeAddress"
                :index="index" 
                :key="index" 
                :address="address">
            </yan-address-item>
        </div>
    
        <!-- 脚注添加地址的按钮 -->
        <yan-address-list-footer></yan-address-list-footer>
    </div>
</template>

<script>
// 引入头部的组件
import YanHeader from '@/components/commons/Header/Header';
// 引入彩色的边框
import YanColorBorder from '@/components/commons/ColorBorder/ColorBorder'
// 引入地址的子项
import YanAddressItem from '@/components/pages/AddressList/AddressItem/AddressItem';
// 引入脚注
import YanAddressListFooter from '@/components/pages/AddressList/Footer/Footer';

export default {
    data() {
        return {
            addressList: []
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    components: {
        YanHeader,
        YanAddressItem,
        YanColorBorder,
        YanAddressListFooter
    },
    methods: {
        removeAddress(index) {
            this.addressList = this.addressList.filter((address, index) => {
                return address.index = index;
            });
        }
    },
    mounted() {
        // 发送请求，获取地址信息
        this.$http({
            method: 'get',
            url: `/users/Address/${this.user.userID}`
        })
            .then((res) => {
                this.addressList = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
.yan-address-content {
    margin-top: 116px;
    margin-bottom: 175px;
    overflow: auto;
}
</style>
