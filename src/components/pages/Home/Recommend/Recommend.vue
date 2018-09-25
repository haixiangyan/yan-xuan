<template>
    <div class="yan-recommend-wrapper">
        <!--轮播图-->
        <el-carousel arrow="never" class="yan-carousel" height="500px">
            <el-carousel-item v-for="(item, index) in 4" :key="index">
                <img class="yan-carousel-img" :src="`static/img/banner/banner-${item}.jpg`" alt="banner">
            </el-carousel-item>
        </el-carousel>
    
        <!--简介部分-->
        <div class="yan-recommand-des">
            <div>
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                <span>网易自营品牌</span>
            </div>
    
            <div>
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                <span>30天无忧退货</span>
            </div>
    
            <div>
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                <span>48小时快速退款</span>
            </div>
        </div>
    
        <!--品牌制造商直供-->
        <div class="yan-brand-goods-wrapper">
            <div class="yan-brand-title">
                <span>品牌制造商直供</span>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
    
            <div class="yan-brand-goods">
                <yan-brand-good class="yan-brand-good-item" v-for="(good, index) in brandGoods" :key="index" :good="good"></yan-brand-good>
            </div>
        </div>
    
        <!--推荐的商品-->
        <div class="yan-recommend-goods-wrapper">
            <yan-intro-display :index="0" :introInfo="saleSortInfo"></yan-intro-display>
            <yan-intro-display :index="1" :introInfo="timeSortInfo"></yan-intro-display> 
        </div>
    
        <!--倒计时-->
        <div class="yan-counter-wrapper">
            <yan-counter :counterInfo="counterInfo"></yan-counter>
        </div>

        <!--专题封面-->
        <div class="yan-topic-preface-wrapper">
            <yan-topic-preface :prefaceInfo="prefaceInfo"></yan-topic-preface>
        </div>

        <!--分类展示商品-->
        <div class="yan-catalog-wrapper">
            <yan-catalog class="yan-catalog" v-for="(catalog, index) in catalogsInfo" :key="index" :index="index" :catalog="catalog" :more="true"></yan-catalog>
        </div>

        <!--脚注-->
        <yan-home-footer class="yan-home-footer"></yan-home-footer>
    </div>
</template>

<script>
// 引入品牌的商品
import YanBrandGood from '@/components/commons/BrandGood/BrandGood';
// 引入推荐商品的组件
import YanIntroDisplay from '@/components/commons/IntroDisplay/IntroDisplay';
// 引入倒计时的组件
import YanCounter from '@/components/pages/Home/Recommend/Counter/Counter';
// 引入专题封面的组件
import YanTopicPreface from '@/components/pages/Home/TopicPreface/TopicPreface';
// 引入展示分类商品的组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';
// 引入首页的脚注
import YanHomeFooter from '@/components/pages/Home/Footer/Footer';

export default {
    data() {
        return {
            brandGoods: [
                {
                    name: '新秀丽制造商',
                    price: 59,
                    img: 'static/img/brand/brand-1.jpg',
                    label: '上新'
                },
                {
                    name: 'Coach制造商',
                    price: 49,
                    img: 'static/img/brand/brand-2.jpg',
                },
                {
                    name: 'CK制造商',
                    price: 36,
                    img: 'static/img/brand/brand-3.jpg',
                },
                {
                    name: 'Police制造商',
                    price: 59,
                    img: 'static/img/brand/brand-4.jpg',
                    label: '上新'
                },
            ],
            saleSortInfo: [],
            timeSortInfo: [],
            // 倒计时信息
            counterInfo: {},
            // 专题精选封面
            prefaceInfo: {},
            // 展示分类商品的信息
            catalogsInfo: []
        }
    },
    components: {
        YanBrandGood,
        YanIntroDisplay,
        YanCounter,
        YanTopicPreface,
        YanCatalog,
        YanHomeFooter
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 0
        });

        // 发送请求，获取商品的最近销量展示信息
        this.$http({
            method: 'get',
            url: `/goods/topSale`
        })
            .then((res) => {
                this.saleSortInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });

        // 发送请求，获取商品的最好销量展示信息
        this.$http({
            method: 'get',
            url: `/goods/recentSale`
        })
            .then((res) => {
                this.timeSortInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });

        // 发送请求，获取商品的倒计时
        this.$http({
            method: 'get',
            url: `/home-counter`
        })
            .then((res) => {
                this.counterInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });

        // 发送请求，获取商品的专题精选
        this.$http({
            method: 'get',
            url: `/home-topic-preface`
        })
            .then((res) => {
                this.prefaceInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'get',
            url: `/goods/displayGoods`
        })
            .then((res) => {
                this.catalogsInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/*轮播图*/
.yan-carousel {
    width: 100%;
}

.yan-carousel-img {
    max-width: 100%;
}

/*简介部分*/
.yan-recommand-des {
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #fff;
}

.yan-recommand-des i {
    color: rgb(180, 40, 45);
}

.yan-recommand-des span {
    font-size: 32px;
}

/*品牌直供标题样式*/
.yan-brand-title {
    margin-top: 20px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
}

.yan-brand-title span {
    font-size: 40px;
}

.yan-brand-title i {
    margin-left: 20px;
    color: rgb(132, 132, 132);
}


/*品牌直供商品样式*/
.yan-brand-goods {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #fff;
}

.yan-brand-good-item {
    margin-bottom: 20px;
}

/*推荐商品的样式*/
.yan-recommend-goods-wrapper,
.yan-counter-wrapper,
.yan-topic-preface-wrapper,
.yan-catalog {
    margin-top: 20px;
}

/*展示分类商品*/
.yan-catalog-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
