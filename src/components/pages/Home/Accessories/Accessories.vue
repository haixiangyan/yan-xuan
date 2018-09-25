<template>
    <div class="yan-home-accessories">
    
        <img class="yan-home-accessories-header" :src="headerImg" alt="headerImage">
    
        <yan-catalog class="yan-accessories-catalog" :more="accessoriesInfo.length % 2 !== 0" v-for="(catalogInfo, index) in accessoriesInfo" :key="index" :catalog="catalogInfo"></yan-catalog>  
    </div>
</template>

<script>
// 引入首页的商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    data() {
        return {
            headerImg: 'static/img/accessories/header.jpg',
            accessoriesInfo: {}
        }
    },
    components: {
        YanCatalog
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 3
        });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'post',
            url: `/goods/certainCategory`,
            body: {
                category: '配件'
            }
        })
            .then((res) => {
                this.accessoriesInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部图片 */
.yan-home-accessories-header {
    min-width: 100%;
}

/* 商品分类 */
.yan-accessories-catalog {
    margin-top: 20px;
}
</style>
