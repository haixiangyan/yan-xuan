<template>
    <div class="yan-home-cook">
    
        <img class="yan-home-cook-header" :src="headerImg" alt="headerImage">
    
        <yan-catalog class="yan-cook-catalog" :more="cookInfo.length % 2 !== 0" v-for="(catalogInfo, index) in cookInfo" :key="index" :catalog="catalogInfo"></yan-catalog>  
    </div>
</template>

<script>
// 引入首页的商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    data() {
        return {
            headerImg: 'static/img/cook/header.jpg',
            cookInfo: {}
        }
    },
    components: {
        YanCatalog
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 2
        });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'post',
            url: `/goods/certainCategory`,
            body: {
                category: '餐厨'
            }
        })
            .then((res) => {
                this.cookInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部图片 */
.yan-home-cook-header {
    min-width: 100%;
}

/* 商品分类 */
.yan-cook-catalog {
    margin-top: 20px;
}
</style>
