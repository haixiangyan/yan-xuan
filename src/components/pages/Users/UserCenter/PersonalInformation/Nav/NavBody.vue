<template>
    <div class="nav-body">
        <router-link tag="div" :to="`/users/info/${id}`" class="nav-body-li">
            <div class="nav-body-li-name">
                <span>个人信息</span>
            </div>
            <div class="nav-body-li-render">
                <div><img :src="nav_img" alt=""></div>
                <div><img class="render" src="/static/img/loginImage/render.png" alt=""></div>
            </div>
        </router-link>
        <div class="nav-body-li">
            <div class="nav-body-li-name">
                <span>严选会员</span>
            </div>
            <div class="nav-body-li-render">
                <div><span>普通用户</span></div>
                <div><img class="render" src="/static/img/loginImage/render.png" alt=""></div>
            </div>
        </div>
    </div>
</template> 
<script>

//<router-link tag="" to="/hom"></router-link>
export default {
    props: ['id'],
    data() {
        return{
            nav_img: '/static/img/loginImage/userHeadPortrait/nav-img.png'
        }
    },
    computed:{
        user() {
            return this.$store.getters.user;
        },
    },
    methods:{
                   
    },
    mounted(){
        this.nav_img = this.user.photo;
    }
}
</script>

<style scoped>
.nav-body{
    width: 100%;
    height: 300px;
    margin-top: 116px;;
    display: flex;
    flex-flow: column nowrap;
    background-color:  white;
    
}

.nav-body .nav-body-li{
    width: 90%;
    padding: 0 5% 0 5%;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

.nav-body .nav-body-li:first-of-type{
    border-bottom: 1px solid rgb(217, 217, 217);
}

.nav-body .nav-body-li .nav-body-li-name{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.nav-body-li-name,.nav-body-li-render span{
    font-size: 36px;
    color: #333;;
}
.nav-body-li .nav-body-li-render {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    width: 220px;
}
.nav-body-li-render img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.nav-body-li-render img.render{
    width: 60px;
    height: 60px;
}
</style>