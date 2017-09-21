<template>
    <div class="yan-edit-address-footer">
        <!-- 取消 -->
        <div @click="cancel" class="cancel">
            取消
        </div>
    
        <!-- 保存 -->
        <div @click="confirm" class="save">
            保存
        </div>
    </div>
</template>

<script>
export default {
    props: ['addressForm'],
    computed: {
        user() {
            return this.$store.getters.user;
        },
        isEditAddress() {
            return this.$store.getters.isEditAddress;
        },
        index() {
            return this.$store.getters.editAddressIndex;
        }
    },
    methods: {
        cancel() {
            this.$router.go(-1);
        },
        confirm() {
            // 判断是否为编辑
            if (this.isEditAddress) {
                // 编辑，发送请求，修改地址
                this.$http({
                    method: 'post',
                    url: `/users/changeAddress`,
                    body: JSON.stringify({
                        userID: this.user.userID,
                        index: this.index,
                        address: this.addressForm
                    })
                })
                    .then((res) => {

                    })
                    .catch((err) => {
                        console.log('vue-resource err', err);
                    });
            }
            else {
                // 新增地址，发送请求，新增地址
                this.$http({
                    method: 'post',
                    url: `/users/addAddress`,
                    body: JSON.stringify({
                        userID: this.user.userID,
                        address: this.addressForm
                    })
                })
                    .then((res) => {

                    })
                    .catch((err) => {
                        console.log('vue-resource err', err);
                    });
            }

            // 最终修改前端的地址
            this.$store.commit('getEditAddress', {
                editAddress: this.addressForm
            });

            this.$router.go(-1);
        }
    },
    beforeDestroy() {
        // 重置地址表单的状态
        this.$store.commit('resetEditState');
    }
}
</script>

<style scoped>
.yan-edit-address-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cancel,
.save {
    flex-grow: 1;
    padding: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cancel {
    background: #fff;
}

.save {
    background: #b4282d;
    color: #fff;
}
</style>
