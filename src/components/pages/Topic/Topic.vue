<template>
    <div class="topic">
        <yan-topic-header></yan-topic-header>
        <yan-topic-body></yan-topic-body>

        <!--Tab bar-->
        <yan-tab-bar :selectedIndex="1"></yan-tab-bar>

        <!--返回到顶部-->
        <yan-scroll-top></yan-scroll-top>
    </div>
</template>

<script>
// 引入专题的头部和内容
import YanTopicHeader from '@/components/pages/Topic/TopicHeader/TopicHeader';
import YanTopicBody from '@/components/pages/Topic/TopicBody/TopicBody';

// 引入 TabBar 组件
import YanTabBar from '@/components/commons/TabBar/TabBar';

// 引入返回头部组件
import YanScrollTop from '@/components/commons/ScrollTop/ScrollTop';

export default {
    data() {
        return {
            topic: 'This is a topic page'
        }
    },
    components: {
        YanTopicHeader,
        YanTopicBody,
        YanTabBar,
        YanScrollTop
    }
}
</script>

<style scoped>
.topic{
    background-color: #f4f4f4;
}
</style>