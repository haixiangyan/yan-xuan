<template>
    <div class="yan-home-interest">
    
        <img class="yan-home-interest-header" :src="headerImg" alt="headerImage">
    
        <yan-catalog class="yan-interest-catalog" :more="interestInfo.length % 2 !== 0" v-for="(catalogInfo, index) in interestInfo" :key="index" :catalog="catalogInfo"></yan-catalog>  
    </div>
</template>

<script>
// 引入首页的商品的分类组件
import YanCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    data() {
        return {
            headerImg: '/static/img/interest/header.jpg',
            interestInfo: {}
        }
    },
    components: {
        YanCatalog
    },
    mounted() {
        // 改变所选的索引值
        this.$store.commit('changeNavbarIndex', {
            selectedIndex: 9
        });

        // 发送请求，获取商品的分类信息
        this.$http({
            method: 'post',
            url: `/goods/certainCategory`,
            body: {
                category: '志趣'
            }
        })
            .then((res) => {
                this.interestInfo = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 头部图片 */
.yan-home-interest-header {
    min-width: 100%;
}

/* 商品分类 */
.yan-interest-catalog {
    margin-top: 20px;
}
</style>
