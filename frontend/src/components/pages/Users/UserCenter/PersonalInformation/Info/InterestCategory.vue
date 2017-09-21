<template>
    <div class="yan-user-center-info-interest">
        <yan-header></yan-header>

        <yan-user-center-info-interest-body :id="id"></yan-user-center-info-interest-body>
    </div>
</template>
<script>
// 引入头部
import YanHeader from '@/components/commons/Header/Header';

import YanUserCenterInfoInterestBody from '@/components/pages/Users/UserCenter/PersonalInformation/Info/Interest/InterestCategoryBody';

export default {
    data() {
        return {
            id: this.$route.params.userId
        }
    },
    components:{
        YanHeader,
        YanUserCenterInfoInterestBody
    },
    mounted() {
    },
    beforeRouteLeave (to, from, next) {
 
        if(to.path !== '/users/info/'+this.id){
            this.$store.commit('editHistoryFile', {
                historyFile: null
            });
            this.$store.commit('cleanHistoryUser', {
                historyUser: null
            });
            this.$store.commit('editFile', {
                file: null
            });
        }
        next();
    },
    computed:{
        user() {
            return this.$store.getters.user;
        },
        file() {
            return this.$store.getters.file;
        },
        historyFile(){
            return this.$store.getters.historyFile;
        },
        historyUser(){
            return this.$store.getters.historyUser;
        }
    },
}
</script>

<style scoped>
.yan-user-center-info-interest{
    background-color: #f4f4f4;
}
</style>