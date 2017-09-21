<template>
    <div class="yan-category-wrapper">
        <!-- 搜索框 -->
        <yan-category-search></yan-category-search>

        <!-- 侧边栏 -->
        <yan-category-menu class="yan-category-menu"></yan-category-menu>

        <!-- 内容区 -->
        <yan-category-content :category="selectedCategory" class="yan-category-content"></yan-category-content>

        <!-- tab bar -->
        <yan-tab-bar :selectedIndex="2"></yan-tab-bar>
    </div>
</template>

<script>
// 引入搜索框的组件
import YanCategorySearch from '@/components/pages/Category/Search/Search';
// 引入侧边栏的组件
import YanCategoryMenu from '@/components/pages/Category/Menu/Menu';
// 引入内容区
import YanCategoryContent from '@/components/pages/Category/Content/Content';
// 引入 TabBar 组件
import YanTabBar from '@/components/commons/TabBar/TabBar';

export default {
    data() {
        return {
            categoryInfo: [],
        }
    },
    components: {
        YanCategorySearch,
        YanCategoryMenu,
        YanCategoryContent,
        YanTabBar
    },
    computed: {
        selectedCategory() {
            return this.$store.getters.selectedMenu;
        }
    },
    mounted() {
        // 发送请求，获取菜单的资源
        this.$http({
            method: 'get',
            url: `/goods/category`
        })
            .then((res) => {
                // 获取菜单内容
                this.categoryInfo = res.body.data;

                // 初始化所选内容
                this.categoryInfo.forEach((category) => {
                    if (category.name === '居家') {
                        this.$store.commit('initSelectedMenu', {
                            selectedMenu: category
                        }); 
                        return ;
                    }
                });

                // 将内容放到 vuex 中
                this.$store.commit('initMenuSource', {
                    menuSource: this.categoryInfo
                });
          
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
/* 侧边栏 */
.yan-category-menu,
.yan-category-content {
    margin-top: 118px;
    margin-bottom: 123px;
}

/* 内容区 */
.yan-category-content {
     margin-left: 231px; 
}
</style>
