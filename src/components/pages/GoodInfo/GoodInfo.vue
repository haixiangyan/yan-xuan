<template>
    <div class="yan-good-info">
        <!-- 头部 -->
        <yan-header class="yan-header"></yan-header>
    
        <!-- 商品的轮播图 -->
        <div class="yan-good-carousel">
            <el-carousel arrow="never" indicator-position="none" height="980px">
                <el-carousel-item v-for="(img, index) in goodInfo.headImage" :key="index">
                    <img :src="img" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

        <!-- 商品的特点短介绍 -->
         <div class="yan-good-short-desc">
              <yan-short-desc 
                :img="goodInfo.shortDescriptionImage[0]" 
                :firstTitle="goodInfo.shortDescription[0]" 
                :secondTitle="goodInfo.shortDescription[1]">
            </yan-short-desc> 
             <yan-short-desc 
                :img="goodInfo.shortDescriptionImage[1]" 
                :firstTitle="goodInfo.shortDescription[2]" 
                :secondTitle="goodInfo.shortDescription[3]">
            </yan-short-desc>
            <yan-short-desc 
                :img="goodInfo.shortDescriptionImage[2]" 
                :firstTitle="goodInfo.shortDescription[4]" 
                :secondTitle="goodInfo.shortDescription[5]">
            </yan-short-desc>  
        </div> 

        <!-- 商品的介绍 -->
        <div class="yan-good-intro-wrapper">
             <yan-good-intro :intro="goodInfo"></yan-good-intro> 
        </div>

        <!-- 商品的选择 -->
        <div class="yan-good-select-wrapper">
            <yan-good-select></yan-good-select>
        </div>

        <!-- 商品的评价 -->
        <div class="yan-good-comment-wrapper">
            <!-- 评价区的头部 -->
            <router-link tag="div" :to="`/comment-list/${this.$route.params.goodId}`" class="yan-good-comment-header">
                <div>
                    用户评价(999+)
                </div>

                <div class="yan-good-comment-more">
                    查看全部
                    <img src="/static/icons/more.png" alt="more">
                </div>
            </router-link>

            <yan-good-comment :comment="firstComment" :author="firstAuthor"></yan-good-comment>
        </div>

        <!-- 商品的详细信息 -->
        <div class="yan-good-spec-wrapper">
            <yan-good-spec :info="goodInfo.information"></yan-good-spec>
        </div>

        <!-- 商品的介绍图片 -->
        <div class="yan-good-pics">
            <img v-for="(img, index) in goodInfo.description" :key="index" :src="img" alt="desc">
        </div>

        <!-- 商品的常见问题 -->
        <div class="yan-good-problem-wrapper">
            <yan-title class="yan-title" :title="'常见问题'"></yan-title>

            <div v-for="(problem, index) in problems" :key="index" class="yan-good-problem">
                <p class="question">{{problem.question}}</p>
                <p class="answer">{{problem.answer}}</p>
            </div>
        </div>

        <!-- 商品的推荐 -->
         <div class="yan-suggest-goods">
            <yan-title class="yan-title" :title="'大家都在看'"></yan-title>

            <yan-catalog :catalog="suggestGoods" :more="suggestGoods.data.length % 2 !== 0"></yan-catalog>
        </div> 

        <yan-good-footer></yan-good-footer>

        <!-- 返回顶部的组件 -->
        <yan-scroll-top></yan-scroll-top>
    </div>    
</template>

<script>
// 引入头部
import YanHeader from '@/components/commons/Header/Header';
// 引入商品短介绍的组件
import YanShortDesc from '@/components/pages/GoodInfo/ShortDesc/ShortDesc';
// 引入商品的介绍
import YanGoodIntro from '@/components/pages/GoodInfo/Intro/Intro';
// 引入选择商品的组件
import YanGoodSelect from '@/components/pages/GoodInfo/Select/Select';
// 引入商品的评价
import YanGoodComment from '@/components/pages/GoodInfo/Comment/Comment';
// 引入商品的详细信息的组件
import YanGoodSpec from '@/components/pages/GoodInfo/Spec/Spec';
// 引入标题组件
import YanTitle from '@/components/commons/Title/Title';
// 引入商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';
// 引入脚注部分
import YanGoodFooter from '@/components/pages/GoodInfo/Footer/Footer';
// 引入返回顶部的组件
import YanScrollTop from '@/components/commons/ScrollTop/ScrollTop';

export default {
    data() {
        return {
            selection: {
                type: 0,
                num: 1
            },
            problems: [
                {
                    question: '购买运费如何收取？',
                    answer: '单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。'
                },
                {
                    question: '使用什么快递发货？',
                    answer: '严选默认使用顺丰快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除外）。'
                },
                {
                    question: '如何申请退换货？',
                    answer: `
                                1.自收到商品之日起30日内，顾客可申请无忧退货；如果是退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
                                2.内裤和食品等特殊商品无质量问题不支持退换货；
                                3.退货流程：
                                确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；
                                4.换货流程：
                                确认收货-申请换货-客服审核通过-用户寄回商品-仓库签收验货-客服确认-换货完成；
                                5.因网易严选产生的退换货，如质量问题，退回货邮费由网易严选承担，退款或换货完成后会以现金券的形式报销。因客户个人原因产生的退换货，购买和退回运费由客户个人承担。
                            `
                },
                {
                    question: '如何开具发票？',
                    answer: `
                                1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以上版本）；
                                2.如需开具增值税专用发票，请在购买后联系客服办理；
                                3.可选开票内容：
                                订单中含有办公用品（箱包、文具、口罩）--办公用品等、耗材等、日用品、家居用品、食品、酒/饮料、服饰、化妆品；
                                不含有办公用品--日用品、家居用品、食品、酒/饮料、服饰、化妆品；
                                订单商品为礼品卡--预付卡。
                            `
                },
            ],
            suggestGoods: {
                data: []
            }
        }
    }, 
    computed: {
        goodInfo() {
            return this.$store.getters.good;
        },
        firstComment() {
            return this.$store.getters.comment;
        },
        firstAuthor() {
            return this.$store.getters.author;
        },
        loginState() {
            return this.$store.getters.loginState;
        }
    },
    components: {
        YanHeader,
        YanShortDesc,
        YanGoodIntro,
        YanGoodSelect,
        YanGoodComment,
        YanGoodSpec,
        YanTitle,
        YanCatalog,
        YanGoodFooter,
        YanScrollTop
    },
    mounted() {
        let id = this.$route.params.goodId;

        // 重置立即购买
        this.$store.commit('resetTempCartItem');
        this.$store.commit('resetSelection');

        // 发送请求获取商品的全部数据
        this.$http({
            method: 'get',
            url: `/goods/goods/${id}`,
        })
            .then((res) => {
                // 初始化商品
                this.$store.commit('initGood', {
                    good: res.body.data[0]
                });
                // 初始化第一个评论
                this.$store.commit('initComment', {
                    comment: res.body.data[1],
                    author: res.body.data[2]
                })
            })
            .then(() => {
                // 发送请求获取商品的建议
                this.$http({
                    method: 'post',
                    url: `/goods/search`,
                    body: {
                        key: this.goodInfo.category
                    }
                })
                    .then((res) => {
                        // 初始化商品
                        this.suggestGoods.data = res.body.data;
                    })
                    .catch((err) => {
                        console.log('vue-resource err', err);
                    });
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });

    }
}
</script>

<style scoped>
.yan-good-info {
    background: rgb(249, 249, 249);
    margin-bottom: 130px;
}

/* 轮播图 */
.yan-good-carousel {
     margin-top: 115px; 
     background: #fff;
}

.yan-good-carousel img {
     min-width: 100%; 
}

/* 商品短介绍 */
.yan-good-short-desc {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* 商品的介绍部分 */
.yan-good-intro-wrapper {
    padding: 40px 0 50px 40px;
    background: #fff;
}

/* 商品的选择 */
.yan-good-select-wrapper {
    margin-top: 25px;
    background: #fff;
    padding-left: 30px; 
}

/* 商品的评论 */
.yan-good-comment-wrapper {
    margin-top: 25px;
    padding-left: 30px; 
    background: #fff;
}

.yan-good-comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;   
    height: 130px;
    border-bottom: 1px solid rgb(190, 190, 190);
}

.yan-good-comment-more {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.yan-good-comment-more img {
    max-width: 70px;
}

/* 商品的详细信息 */
.yan-good-spec-wrapper {
    margin-top: 25px;
     background: #fff; 
}

/* 商品的介绍图片 */
.yan-good-pics img {
    min-width: 100%;
    margin-top: -10px;
} 

/* 常见问题 */
.yan-title {
    padding: 60px 0;
}

.yan-good-problem-wrapper {
    background: #fff;
}

.yan-good-problem {
    margin: 0 auto;
    width: 90%;
    padding-bottom: 30px;
}

.question,
.answer {
    word-break: break-all;
    word-wrap: break-word;
}

.question {
    font-size: 36px;    
    padding-bottom: 20px;
       /* font-size: 14px; */
       /* 小 bug        */
}

.answer {
    color: rgb(120, 120, 120);
    line-height: 50px; 
      font-size: 32px; 
     /* font-size: 13px; */
     /*小 bug     */
}

/* 推荐的商品 */
.yan-suggest-goods {
    background: #fff;
}
</style>
