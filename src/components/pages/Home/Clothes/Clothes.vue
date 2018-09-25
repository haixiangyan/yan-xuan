<template>
    <div class="yan-home-clothes">
    
        <img class="yan-home-clothes-header" :src="headerImg" alt="headerImage">
    
        <yan-catalog class="yan-clothes-catalog" :more="clothesInfo.length % 2 !== 0" v-for="(catalogInfo, index) in clothesInfo" :key="index" :catalog="catalogInfo"></yan-catalog>  
    </div>
</template>

<script>
// 引入首页的商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    data() {
        return {
            headerImg: 'static/img/clothes/header.jpg',
            clothesInfo: {}
        }
    },
    components: {
        YanCatalog
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 4
        });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'post',
            url: `/goods/certainCategory`,
            body: {
                category: '服装'
            }
        })
            .then((res) => {
                this.clothesInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部图片 */
.yan-home-clothes-header {
    min-width: 100%;
}

/* 商品分类 */
.yan-clothes-catalog {
    margin-top: 20px;
}
</style>
