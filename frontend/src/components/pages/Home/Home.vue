<template>
    <div class="yan-home-wrapper">
        <!--导航栏-->
        <yan-navbar class="yan-navbar"></yan-navbar>
    
        <!--展示导航内容-->
        <router-view></router-view>
    
        <!--Tab bar-->
        <yan-tab-bar :selectedIndex="0"></yan-tab-bar>
    
        <!--返回到顶部-->
        <yan-scroll-top></yan-scroll-top>
    </div>
</template>

<script>
// 引入导航栏
import YanNavbar from '@/components/pages/Home/Navbar/Navbar';
// 引入 TabBar 组件
import YanTabBar from '@/components/commons/TabBar/TabBar';
// 引入返回到顶部的组件
import YanScrollTop from '@/components/commons/ScrollTop/ScrollTop';

export default {
    data() {
        return {
        }
    },
    components: {
        YanNavbar,
        YanTabBar,
        YanScrollTop,
    }
}
</script>

<style scoped>
.yan-home-wrapper {
    margin-top: 191px;
    margin-bottom: 125px;
    background: #f4f4f4;
}

/*固定头部样式*/
.yan-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
}

/*脚注部分*/
.yan-home-footer {
    margin-top: 30px;
}
</style>
