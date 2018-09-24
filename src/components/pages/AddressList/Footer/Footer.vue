<template>
    <div class="yan-address-list-footer">
        <!-- 添加地址的按钮 -->
        <div @click="toCreateAddress" class="add-address">
            <i class="fa fa-plus" aria-hidden="true"></i>
            新建地址
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toCreateAddress() {
            // 关闭编辑状态
            this.$store.commit('resetEditState');

            this.$router.push( '/address-form');
        }
    }
}
</script>

<style scoped>
.yan-address-list-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 35px 35px;
    background: #fff;
}

.add-address {
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(180, 40, 45);
    color: rgb(180, 40, 45);
    font-size: 38px;
}

.add-address i {
    padding: 10px;
    color: rgb(180, 40, 45);
    font-size: 38px;
}
</style>
