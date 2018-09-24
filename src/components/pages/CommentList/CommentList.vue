<template>
    <div class="yan-comment-list">
        <!-- 头部 -->
        <yan-header></yan-header>

        <!-- 评论的列表 -->
        <div class="yan-comment-list-content">
            <yan-good-comment 
                class="yan-comment"
                v-for="(comment, index) in commentList"
                :key="index"
                :comment="comment" 
                :author="userList[index]">
            </yan-good-comment>
        </div>
    </div>
</template>

<script>
// 引入头部
import YanHeader from '@/components/commons/Header/Header';
// 引入商品的评价
import YanGoodComment from '@/components/pages/GoodInfo/Comment/Comment';

export default {
    data() {
        return {
            commentList: [],
            userList: []
        }
    },
    components: {
        YanHeader,
        YanGoodComment
    },
    mounted() {
        let id = this.$route.params.goodId;

        // 发送请求获取评论
        this.$http({
            method: 'get',
            url: `/goods/comment/${id}`
        })
            .then((res) => {
                this.commentList = res.body.data.comment;
                this.userList = res.body.data.user;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 评论的内容 */
.yan-comment-list-content {
    margin-top: 116px;
} 

.yan-comment {
    padding: 0 30px 10px;
    border-top: 1px solid rgb(200, 200, 200);
}
</style>
