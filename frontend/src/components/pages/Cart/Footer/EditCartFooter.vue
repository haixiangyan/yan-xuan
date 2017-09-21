<template>
    <div class="yan-edit-cart-footer">
        <!-- 全选 -->
        <div class="yan-select-all">
            <i @click="selectAllItems" v-show="!isSelectAll" class="fa fa-circle-o" aria-hidden="true"></i>
            <i @click="unselectAllItems" v-show="isSelectAll" class="fa fa-check-circle-o" aria-hidden="true"></i>
            <span>已选({{selectNum}})</span>
        </div>
    
        <!-- 删除项目 -->
        <div @click="removeCartItems" :class="['yan-delete', {'active-delete': isSelected}]">
            删除所选
        </div>
    
    </div>
</template>


<script>
export default {
    computed: {
        selectNum() {
            return this.$store.getters.selectCartItemNum;
        },
        isSelectAll() {
            return this.$store.getters.isSelectAllCartItems;
        },
        isSelected() {
            return this.$store.getters.isSelected;
        },
        user() {
            return this.$store.getters.user;
        },
        cart() {
            return this.$store.getters.cart;
        }
    },
    methods: {
        selectAllItems() {
            this.$store.commit('toggleAllCartItems', {
                state: 1
            });
        },
        unselectAllItems() {
            this.$store.commit('toggleAllCartItems', {
                state: 0
            });
        },
        removeCartItems() {
            this.$store.commit('removeCartItems');
        }
    }
}
</script>

<style scoped>
.yan-edit-cart-footer {
    position: fixed;
    bottom: 117px;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(200, 200, 200);
    background: #fff;
}

/* 全选按钮 */
.yan-select-all {
    display: flex;
    align-items: center;
}

.fa-circle-o {
    color: rgb(200, 200, 200);
    font-size: 50px;
}

.fa-check-circle-o {
    color: rgb(180, 40, 45);
    font-size: 50px;
}

.yan-select-all i {
    padding: 35px;
}

/* 删除按钮 */
.yan-delete {
    padding: 40px 50px;
    color: #fff;
    background: rgb(204, 204, 204);
}

.active-delete {
    background: rgb(180, 40, 45);
}
</style>
