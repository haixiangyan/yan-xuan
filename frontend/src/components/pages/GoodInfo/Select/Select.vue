<template>
  <div class="yan-good-select">
    <!-- 规格的选择 -->
    <router-link tag="div" :to="`/choose/${this.$route.params.goodId}`" class="yan-spec-select">
        <div>
            请选择规格数量
        </div>

        <div>
            <img src="/static/icons/more.png" alt="more">
        </div>
    </router-link>

    <!-- 促销的选择 -->
    <router-link tag="div" to="/" class="yan-discount-select">
        <div>
            两个促销：
            <yan-good-label :label="{title: '餐厨升级'}"></yan-good-label>
            <span >领￥220全场</span>
        </div>

        <div>
            <img src="/static/icons/more.png" alt="more">
        </div>
    </router-link>

    <!-- 服务的选择 -->
    <router-link tag="div" to="/" class="yan-service-select">
        <div>
            服务：
        </div>

        <div style="width: 70%;">
            <ul class="service-list">
                <li>30天无忧退换</li>
                <li>48小时快速退款</li>
                <li>满88元免邮费</li>
                <li>网易自营品牌</li>
                <li>部分地区无法配送</li>
            </ul>
        </div>

        <div>
            <img src="/static/icons/more.png" alt="more">
        </div>
    </router-link>
  </div>
</template>

<script>
// 引入商品的标签
import YanGoodLabel from '@/components/pages/GoodInfo/Intro/Label/Label';

export default {
    components: {
        YanGoodLabel
    }
}
</script>

<style scoped>
/* 选择规格 */
.yan-spec-select,
.yan-discount-select {
    height: 130px;
    display: flex;
    padding-right: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(190, 190, 190);
}

.yan-spec-select div,
.yan-discount-select div,
.yan-service-select div {
    display: inline-block;
}

.yan-spec-select img,
.yan-discount-select img,
.yan-service-select img {
    max-width: 70px;
}

/* 促销部分 */
.yan-discount-select span {
    color: rgb(244, 143, 24);
}

/* 服务列表 */
 .yan-service-select {
    padding-right: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
} 

.service-list {
    padding: 20px 0; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center; 
}

.service-list li {
    list-style-type: circle;
    margin: 0 45px 20px 0;
}
</style>
