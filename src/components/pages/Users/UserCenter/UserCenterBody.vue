<template>
    <div class="yan-usercenter-body">
        <div class="yan-usercenter-body-wrapper" >
            <router-link tag="div" :to="item.url" class="entry-item" v-for="(item, index) in items" :key="index">
                <div :style="{'background-image': `url(${bgImage})`,'background-position-y': `${item.bgposy}`}"></div>
                <span class="txt">{{item.txt}}</span>
            </router-link>
        </div>
        <div v-on:click="logout()" class="yan-usercenter-body-footer">
            <button>退出登录</button>
        </div>
    </div>
</template>
<script>

//<router-link tag="" to="/hom"></router-link>
export default {
    props: ['id'],
    data() {
        return {
            bgImage: '/static/img/loginImage/itemsBgImage.png',
            items:[
                {
                    txt:"我的订单",
                    bgposy :"-620px",
                    url: '/order-list'
                },
                {
                    txt:"周六一起拼",
                    bgposy :"-765px",
                    url: '/order-list'
                },
                {
                    txt:"售后服务",
                    bgposy :"-65px",
                    url: '/order-list'
                },
                {
                    txt:"优惠券",
                    bgposy :"-145px",
                    url: '/order-list'
                },
                {
                    txt:"优先购",
                    bgposy :"-845px",
                    url: '/order-list'
                },
                {
                    txt:"礼品卡",
                    bgposy :"-305px",
                    url: '/order-list'
                },
                {
                    txt:"会员福利",
                    bgposy :"-700px",
                    url: '/order-list'
                },
                {
                    txt:"地址管理",
                    bgposy :"10px",
                    url: '/order-list'
                },
                {
                    txt:"帐号安全",
                    bgposy :"-930px",
                    url: '/order-list'
                },
                {
                    txt:"联系客服",
                    bgposy :"-460px",
                    url: '/chat'
                },
                {
                    txt:"帮助中心",
                    bgposy :"-380px",
                    url: '/order-list'
                },
                {
                    txt:"意见反馈",
                    bgposy :"-225px",
                    url: '/order-list'
                }
            ]
        }
    },
    methods:{
        logout(){
            this.$store.commit('setLoginState', {
                loginState: {
                    telephone: this.id,
                    isLogin: false
                }
            });
            this.$router.push({name: 'Home'})
        }      
    },
    mounted(){
    },
    computed:{
        loginState() {
            return this.$store.getters.loginState;
        }
    }
}
</script>

<style scoped>
.yan-usercenter-body{
    background-color: #f4f4f4;
    height: 100%;
}

.yan-usercenter-body-wrapper{
    height: 960px;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    background-color: white;
    /* align-items: center; */
}

.entry-item{
    width: 33.2%;
    height: 220px;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.entry-item:nth-of-type(3n){
    border-right: 0;
}

.entry-item div{
    width: 66px;
    height: 80px;
    margin-bottom: 15px;
    /* background-position: 0 -620px; */
     background-position-x: 0;
    background-repeat: no-repeat;
    background-size: 66px 1000px;
}

.entry-item span{
    font-size: 31px;
    color: #333;
}

.yan-usercenter-body-footer{
    margin-top: 50px;
    height: 100px;
    width: 100%;
}

.yan-usercenter-body-footer button{
    width: 100%;
    height: 100%;
    background-color: white;
    font-size: 36px;
    border: 0;
}

</style>