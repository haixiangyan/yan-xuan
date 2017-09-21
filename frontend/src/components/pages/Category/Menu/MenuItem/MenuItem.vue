<template>
    <div @click="changeMenuContent" class="yan-menu-item">
        {{menuInfo}}
    </div>
</template>

<script>
export default {
    props: ['menuInfo', 'index'],
    methods: {
        changeMenuContent() {
            // 改变菜单内容
            this.$store.commit('changeMenuContent', {
                name: this.menuInfo
            });
            // 改变菜单索引
            this.$store.commit('changeMenuIndex', {
                selectedIndex: this.index
            });
        }
    }
}
</script>

<style scoped>
.yan-menu-item {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
