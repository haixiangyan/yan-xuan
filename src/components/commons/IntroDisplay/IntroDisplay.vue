<template>
    <div class="yan-intro-display-wrapper">
        <!--商品简介的头部-->
        <yan-intro-header :index="index"></yan-intro-header>
        <!--商品的内容-->
        <div class="yan-intro-goods-wrapper">
            <yan-intro-good class="yan-intro-good" v-for="(good, index) in introInfo" :key="index" :good="good"></yan-intro-good>
            <yan-more class="yan-more" :url="introInfo.url"></yan-more>
        </div>
    </div>
</template>

<script>
// 引入头部
import YanIntroHeader from '@/components/commons/IntroDisplay/Header/Header';
// 引入商品的组件
import YanIntroGood from '@/components/commons/IntroDisplay/Good/Good';
// 引入更多的组件
import YanMore from '@/components/commons/IntroDisplay/More/More'

export default {
    props: ['introInfo', 'index'],
    components: {
        YanIntroHeader,
        YanIntroGood,
        YanMore
    }
}
</script>

<style scoped>
.yan-intro-goods-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow: auto;
    white-space: nowrap;
    background: #fff;
}

/*展示商品*/
.yan-intro-good,
.yan-more {
    padding: 30px;
    padding-right: 0px;
}
</style>
