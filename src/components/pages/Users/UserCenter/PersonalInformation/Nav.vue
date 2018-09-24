<template>
    <div class="yan-usercenter-nav">
        <yan-header></yan-header>

        <yan-user-center-nav-body :id="id"></yan-user-center-nav-body>
    </div>
</template>
<script>
// 引入头部
import YanHeader from '@/components/commons/Header/Header';
import YanUserCenterNavBody from '@/components/pages/Users/UserCenter/PersonalInformation/Nav/NavBody';

export default {
    data() {
        return {
            id: this.$route.params.userId
        }
    },
    components:{
        YanHeader,
        YanUserCenterNavBody
    },
    mounted() {
    }
}
</script>

<style scoped>
.yan-usercenter-nav{
    background-color: #f4f4f4;
}
</style>