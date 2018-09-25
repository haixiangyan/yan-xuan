<template>
    <div class="yan-home-groceries">
    
        <img class="yan-home-groceries-header" :src="headerImg" alt="headerImage">
    
        <yan-catalog class="yan-groceries-catalog" :more="groceriesInfo.length % 2 !== 0" v-for="(catalogInfo, index) in groceriesInfo" :key="index" :catalog="catalogInfo"></yan-catalog>  
    </div>
</template>

<script>
// 引入首页的商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    data() {
        return {
            headerImg: 'static/img/groceries/header.jpg',
            groceriesInfo: {}
        }
    },
    components: {
        YanCatalog
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 7
        });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'post',
            url: `/goods/certainCategory`,
            body: {
                category: '杂货'
            }
        })
            .then((res) => {
                this.groceriesInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部图片 */
.yan-home-groceries-header {
    min-width: 100%;
    max-width: 100%;
}

/* 商品分类 */
.yan-groceries-catalog {
    margin-top: 20px;
}
</style>
