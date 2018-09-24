<template>
    <router-link :to="`/good-info/${good.ID}`" class="yan-catalog-good-wrapper">
        <!--商品-->
        <div class="yan-good-avatar">
            <img :src="good.headImage" alt="good">

            <!--商品的特点-->
            <yan-vertical-good-label class="yan-ver-label" :title="good.chara"></yan-vertical-good-label>
        </div>
    
        <!--商品描术-->
        <div class="yan-good-desc">
            {{good.subName.length > 13 ? `${good.subName.slice(0, 13)}...` : good.subName}}
        </div>

        <!--商品的标签-->
        <div class="yan-good-labels">
            <yan-good-label class="yan-good-label" v-for="(label, index) in good.labels" :key="index" :labelInfo="label"></yan-good-label>
        </div>
    
        <!--商品名字-->
        <div class="yan-good-name">
            {{good.topName.length > 11 ? `${good.topName.slice(0, 11)}...` : good.topName}}
        </div>

        <!--商品价格-->
        <div class="yan-good-price">
            ￥{{good.price}}
        </div>
    </router-link>
</template>

<script>
// 引入商品的标签
import YanVerticalGoodLabel from '@/components/commons/VerticalGoldLabel/VerticalGoldLabel'
import YanGoodLabel from '@/components/commons/GoodLabel/GoodLabel'

export default {
    props: ['good'],
    components: {
        YanVerticalGoodLabel,
        YanGoodLabel
    }
}
</script>

<style scoped>
.yan-catalog-good-wrapper {
    background: #fff;
}

/*商品图片*/
.yan-good-avatar {
    position: relative;
    height: 450px;
    background: #f4f4f4;
}

.yan-good-avatar img {
    width: 450px;
}

.yan-ver-label {
    position: absolute;
    top: 15px;
    left: 15px;
}

/*商品描术*/
.yan-good-desc {
    padding: 30px 20px;
    background: rgb(241, 236, 226);
    color: rgb(159, 138, 96);
    font-size: 30px;
}

/*商品的标签*/
.yan-good-labels {
    margin-top: 20px;
}

.yan-good-label {
    margin-left: 20px;
}

/*商品名字*/
.yan-good-name {
    margin: 20px 0 15px;
    padding: 0 20px;
}

/*商品价格*/
.yan-good-price {
    padding: 0 20px;
    color: rgb(180, 40, 45);
}
</style>
