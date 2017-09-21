<template>
    <div class="yan-home-household">
    
        <img class="yan-home-household-header" :src="headerImg" alt="headerImage">
    
        <yan-catalog class="yan-household-catalog" :more="householdInfo.length % 2 !== 0" v-for="(catalogInfo, index) in householdInfo" :key="index" :catalog="catalogInfo"></yan-catalog>  
    </div>
</template>

<script>
// 引入首页的商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    data() {
        return {
            headerImg: '/static/img/household/header.jpg',
            householdInfo: {}
        }
    },
    components: {
        YanCatalog
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 1
        });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'post',
            url: `/goods/certainCategory`,
            body: {
                category: '居家'
            }
        })
            .then((res) => {
                this.householdInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部图片 */
.yan-home-household-header {
    min-width: 100%;
}

/* 商品分类 */
.yan-household-catalog {
    margin-top: 20px;
}
</style>
