<template>
  <div @click="selectAddress" class="yan-address-item">

    <!-- 地址的内容 -->
    <div class="yan-address-content">
      <!-- 名字 -->
      <div class="yan-user-name">
        <div class="user-name">{{address.receiver}}</div>
        <div v-if="address.isDefault" class="default-address">默认</div>
      </div>
  
      <!-- 用户的其他信息（地址，电话） -->
      <div class="yan-user-spec">
        <div class="user-tel">{{address.telephone}}</div>
        <div class="user-address">{{`${address.province}${address.city}${address.town}${address.detail}`}}</div>
      </div>
    </div>

    <!-- 编辑 -->
    <div class="yan-address-more">
      <!-- 编辑地址 -->
      <i @click.stop="toEditAddress" class="fa fa-pencil-square-o" aria-hidden="true"></i>
      <!-- 删除地址 -->
      <i @click.stop="removeAddress" class="fa fa-trash-o" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['address', 'index'],
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    selectAddress() {
      // 改变收件的地址
      this.$store.commit('selectAddress', {
        address: this.address
      });

      // 返回到购物车的页面
      this.$router.push('/order');
    },
    toEditAddress() {
      // 开启编辑状态
      this.$store.commit('trickEditState');
      this.$store.commit('getEditAddress', {
          editAddress: this.address,
          editAddressIndex: this.index
      });

      this.$router.push('/address-form');
    },
    removeAddress() {

      // 发送请求删除地址
      this.$http({
            method: 'delete',
            url: `/users/address/${this.user.userID}/${this.index}`
        })
            .then((res) => {
                // 更改前端地址
                this.$emit('removeAddress', this.index);
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
  }
}
</script>

<style scoped>
.yan-address-item {
  padding: 45px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(200, 200, 200);
}

/* 地址的内容 */
.yan-address-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.yan-user-name {
   display: inline-flex; 
   flex-direction: column; 
   justify-content: center; 
   align-items: center;
   width: 110px; 
}

.yan-user-spec {
  display: inline-flex;
  padding-left: 35px;  
  padding-right: 35px;  
  flex-direction: column;
}

/* 用户的名字 */
.user-name {
  margin-bottom: 15px; 
}

/* 默认的地址 */
.default-address {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-size: 24px;
  color: rgb(180, 40, 45);
  border: 3px solid rgb(180, 40, 45);
  border-radius: 6px;
}

/* 电话 */
.user-tel {
  margin-bottom: 15px;
}

/* 用户的地址 */
.user-address {
  color: rgb(102, 102, 102);
  font-size: 32px;
}

/* 更多地址 */
.yan-address-more {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.yan-address-more img {
  width: 60px;
}

.yan-address-more i {
  font-size: 40px;
}

/* 编辑地址 */
.fa-pencil-square-o {
  padding-right: 20px;
  color: #666;
}

/* 删除地址 */
.fa-trash-o {
  color: rgb(180, 40, 45);
}
</style>
