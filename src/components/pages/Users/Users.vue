<template>
    <div class="yan-usercenter">
        <yan-user-center-header :id="id"></yan-user-center-header>
        <yan-user-center-body :id="id"></yan-user-center-body>

        <yan-tab-bar :selectedIndex="4"></yan-tab-bar>
    </div>
</template>
<script>
import YanUserCenterHeader from '@/components/pages/Users/UserCenter/UserCenterHeader';
import YanUserCenterBody from '@/components/pages/Users/UserCenter/UserCenterBody';

// 引入 Tabbar
import YanTabBar from '@/components/commons/TabBar/TabBar';

export default {
    data() {
        return {
            id: this.$route.params.userId
        }
    },
    components: {
        YanUserCenterHeader,
        YanUserCenterBody,
        YanTabBar
    },
    mounted() {

    },
    computed:{
        loginState() {
            return this.$store.getters.loginState;
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$store.commit('setLoginState', {
                loginState: {
                    telephone: vm.id,
                    isLogin: true
                }
            });
        });
    }
}
</script>

<style scoped>
.yan-usercenter{
    background-color: #f4f4f4;
}
</style>