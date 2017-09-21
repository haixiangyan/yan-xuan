<template>
  <div class="yan-good-intro">
    <!-- 商品的信息部分 -->
    <div class="yan-good-info">
        <!-- 商品的名字 -->
        <div class="yan-good-name">
            {{intro.topName}}
        </div>

        <!-- 商品的描术 -->
        <div class="yan-good-desc">
            {{intro.subName}}
        </div>

        <!-- 商品的价格 -->
        <div class="yan-good-price">
            &yen;{{intro.price}}
        </div>

        <!-- 商品的标签 -->
        <div class="yan-good-labels">
            <yan-good-label class="yan-good-label" v-for="(label, index) in intro.label" :key="index" :label="label"></yan-good-label>
        </div>
    </div>

    <!-- 商品的评论 -->
    <div class="yan-good-comment-wrapper">
        <div class="yan-good-comment-intro">
            <div class="yan-good-comment-num">
                999+
            </div>

            <div class="yan-good-comment-title">
                用户评价
            </div>

            <div class="yan-good-comment-check">
                <router-link :to="`/comment-list/${this.$route.params.goodId}`">查看</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// 引入商品的标签
import YanGoodLabel from '@/components/pages/GoodInfo/Intro/Label/Label';

export default {
    props: ['intro'],
    components: {
        YanGoodLabel
    }
}
</script>

<style scoped>
.yan-good-intro {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

/* 商品的名字 */
.yan-good-name {
    font-size: 50px;
    line-height: 90px;
}

/* 商品的描术 */
.yan-good-desc {
    font-size: 38px;
    color:rgb(127, 127, 127);
}

/* 商品的价格 */
.yan-good-price {
    font-size: 60px;
    color: rgb(180, 40, 45);
    font-weight: bold;
    line-height: 90px;
}

/* 商品的标签 */
.yan-good-labels {
    margin-top: 20px
}

.yan-good-label {
    margin-right: 20px;
}

/* 用户的评价 */
.yan-good-comment-intro {
    width: 220px;
    height: 288px;
    display: flex;
    border-left: 1px dashed rgb(127, 127, 127);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.yan-good-comment-num,
.yan-good-comment-title {
    color: rgb(180, 40, 45);
}

.yan-good-comment-num {
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 15px;
}

.yan-good-comment-title {
    font-size: 34px;
    margin-bottom: 25px;
}

.yan-good-comment-check {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 30px;
    border: 1px solid rgb(127, 127, 127);
}

.yan-good-comment-check a {
    font-size: 34px;
}
</style>
