<template>
    <div class="yan-login">
        <yan-header></yan-header>

        <yan-login-body></yan-login-body>
    </div>

</template>
<script>
// 引入头部
import YanHeader from '@/components/commons/Header/Header';

import YanLoginBody from '@/components/pages/Users/Login/LoginBody/LoginBody';

export default {
    data() {
        return {

        }
    },
    components: {
        YanHeader,
        YanLoginBody
    }
}
</script>

<style scoped>
.yan-login{
    background-color: white;
}
</style>