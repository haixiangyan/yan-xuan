<template>
    <div class="topic">
        <yan-header></yan-header>
        <yan-topic-list-body :type="type"></yan-topic-list-body>

        <!--返回到顶部-->
        <yan-scroll-top></yan-scroll-top>
    </div>
</template>

<script>
// 引入头部
import YanHeader from '@/components/commons/Header/Header';
// 引入专题内容
import YanTopicListBody from '@/components/pages/Topic/TopicList/TopicListBody';

// 引入返回头部组件
import YanScrollTop from '@/components/commons/ScrollTop/ScrollTop';

export default {
    data() {
        return {
            type: this.$route.query.type,
            topic: 'This is a topic page'
        }
    },
    components: {
        YanHeader,
        YanTopicListBody,
        YanScrollTop
    }
}
</script>

<style scoped>
.topic{
    background-color: #f4f4f4;
}
</style>