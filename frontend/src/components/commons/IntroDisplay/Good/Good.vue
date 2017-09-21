<template>
    <router-link :to="`/good-info/${good.ID}`" class="yan-display-good-wrapper">
        <div class="yan-display-img-wrapper">
            <!--商品的图片-->
            <img class="yan-display-good-img" :src="good.headImage">
            <!--特色标签-->
            <yan-vertical-gold-label class="yan-display-ver-label" v-if="good.chara" :title="good.chara"></yan-vertical-gold-label>
        </div>
    
        <!--商品的标签-->
        <div v-if="good.labels" class="yan-display-labels">
            <yan-good-label class="yan-display-label-item" v-for="(label, index) in good.labels" :key="index" :labelInfo="label"></yan-good-label>
        </div>
    
        <!--商品的名字-->
        <div class="yan-display-good-name">
            {{good.topName.length > 10 ? `${good.topName.slice(0, 10)}...` : good.topName}}
        </div>
    
        <!--商品的t简介-->
        <div class="yan-display-good-desc">
            {{good.subName.length > 10 ? `${good.subName.slice(0, 10)}...` : good.subName}}
        </div>
    
        <!--商品的价格-->
        <div class="yan-display-good-price">￥{{good.price}}</div>
    </router-link>
</template>

<script>
// 引入商品标签
import YanGoodLabel from '@/components/commons/GoodLabel/GoodLabel';
// 引入纵向的标签
import YanVerticalGoldLabel from '@/components/commons/VerticalGoldLabel/VerticalGoldLabel';

export default {
    props: ['good'],
    components: {
        YanGoodLabel,
        YanVerticalGoldLabel
    }
}
</script>

<style scoped>
.yan-display-good-wrapper {
    display: inline-block;
    width: 330px;
    background: #fff;
}

/*标签*/

.yan-display-ver-label {
    position: absolute;
    top: 15px;
    left: 15px;
}

.yan-display-labels {
    margin-top: 20px;
}

.yan-display-label-item {
    margin-right: 10px;
}

/*展示商品的图片*/
.yan-display-img-wrapper {
    position: relative;
}

.yan-display-good-img {
    display: inline-block;
    width: 340px;
    background: rgb(244, 244, 244);
}

/*展示商品的名字*/
.yan-display-good-name {
    margin: 30px 0 20px;
}

/*展示商品的描术*/
.yan-display-good-desc {
    margin-bottom: 20px;
    font-size: 30px;
    color: rgb(127, 127, 127);
}

/*商品的价格*/
.yan-display-good-price {
    color: rgb(180, 40, 45);
}
</style>
