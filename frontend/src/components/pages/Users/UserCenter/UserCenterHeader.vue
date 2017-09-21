<template>
    <router-link tag="div" :to="`/users/nav/${id}`" class="yan-usercenter-header-wrapper">
        <div class="user-portrait">
            <img :src="thisUser.photo">
        </div>
        <div class="user-name">
            <span>{{thisUser.name}}</span>
            <span>普通用户</span>            
        </div>
    </router-link>
</template>
<script>

//<router-link tag="" to="/hom"></router-link>
export default {
    props: ['id'],
    data() {
        return {
            userId: this.id,
            thisUser: {
                _id: "",
                telephone: "",
                password: "",
                photo: "",
                name: "",
                gender: "",
                __v: 0,
                address: [],
                interest: []
            }
        }
    },
    methods:{  
        loadPersonalInfo(data){
            this.thisUser = data;
            if(!this.thisUser.name){
                this.thisUser.name = '用户'+this.thisUser.telephone;
            }

            if(!this.thisUser.photo ){
                this.thisUser.photo = '/static/img/loginImage/userHeadPortrait/default.png';
            }

            this.$store.commit('initUser', {
                user: this.thisUser
            });
        }        
    },
    mounted(){
        this.$http({
            method: 'get',
            url: '/users/getInformation/'+this.userId
        })
        .then((res) => {
            this.loadPersonalInfo(res.body.data);
        })
        .catch((err) => {
        });
    }
}
</script>

<style scoped>
.yan-usercenter-header-wrapper{
    width: 92%;
    padding: 50px 4% 50px 4%;
    height: 255px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    align-items: center;
    background: url(/static/img/loginImage/header_bg.jpg);
}

.user-portrait{
    height: 185px;
    width: 185px;
}
.user-portrait img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

.user-name{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 100px;
    width: 600px;
    margin-left: 35px;
    font-size: 36px;
    color: rgb(127, 127, 127); 
}
.user-name span{
    color: rgb(127, 127, 127); 
}

.user-name span:first-child{
    font-size: 45px;
    color: white;
    margin-bottom: 18px;
}
</style>