<template>
    <div class="yan-home-food">
    
        <img class="yan-home-food-header" :src="headerImg" alt="headerImage">
    
        <yan-catalog class="yan-food-catalog" :more="foodInfo.length % 2 !== 0" v-for="(catalogInfo, index) in foodInfo" :key="index" :catalog="catalogInfo"></yan-catalog>  
    </div>
</template>

<script>
// 引入首页的商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    data() {
        return {
            headerImg: 'static/img/food/header.jpg',
            foodInfo: {}
        }
    },
    components: {
        YanCatalog
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 8
        });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'post',
            url: `/goods/certainCategory`,
            body: {
                category: '饮食'
            }
        })
            .then((res) => {
                this.foodInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部图片 */
.yan-home-food-header {
    min-width: 100%;
}

/* 商品分类 */
.yan-food-catalog {
    margin-top: 20px;
}
</style>
