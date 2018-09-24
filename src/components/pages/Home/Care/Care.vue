<template>
    <div class="yan-home-care">
    
        <img class="yan-home-care-header" :src="headerImg" alt="headerImage">
    
        <yan-catalog class="yan-care-catalog" :more="careInfo.length % 2 !== 0" v-for="(catalogInfo, index) in careInfo" :key="index" :catalog="catalogInfo"></yan-catalog>  
    </div>
</template>

<script>
// 引入首页的商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    data() {
        return {
            headerImg: '/static/img/care/header.jpg',
            careInfo: {}
        }
    },
    components: {
        YanCatalog
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 5
        });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'post',
            url: `/goods/certainCategory`,
            body: {
                category: '洗护'
            }
        })
            .then((res) => {
                this.careInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部图片 */
.yan-home-care-header {
    min-width: 100%;
}

/* 商品分类 */
.yan-care-catalog {
    margin-top: 20px;
}
</style>
