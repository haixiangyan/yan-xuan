<template>
    <div class="yan-menu-wrapper">
        <yan-category-menu-item v-for="(menuItem, index) in menuInfo" 
            :menuInfo="menuItem" 
            :key="index" 
            :index="index"
            :class="[{'menu-active':  selectedIndex === index}, 'yan-menu-item']">
        </yan-category-menu-item>
    </div>
</template>

<script>
// 引入侧边栏的菜单项
import YanCategoryMenuItem from '@/components/pages/Category/Menu/MenuItem/MenuItem';

export default {
    data() {
        return {
            menuInfo: [
                '居家',
                '餐厨',
                '配件',
                '服装',
                '洗护',
                '婴童',
                '杂货',
                '饮食',
                '志趣',
            ]
        }

    },
    computed: {
        selectedIndex() {
            return this.$store.getters.menuIndex;
        }
    },
    components: {
        YanCategoryMenuItem
    }
}
</script>

<style scoped>
.yan-menu-wrapper {
    width: 230px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid rgb(200, 200, 200);
}

/* 菜单子项 */
.yan-menu-item {
    margin-top: 60px;
    font-size: 38px;
}

/* 选中菜单子项 */
.menu-active {
    width: 100%;
    font-size: 45px;
    color: rgb(171, 43, 43);
    border-left: 15px solid rgb(171, 43, 43);
}
</style>
