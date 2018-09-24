<template>
  <div class="yan-dist-picker">
    <!-- 地址选择器 -->
    <v-distpicker id="dist-picker" v-on:selected="selected" class="picker" type="mobile"></v-distpicker>
    
    <!-- 确认按钮 -->
    <div class="yan-dist-picker-confirm" @click="confirm">
        <div>确定</div>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'

export default {
  data() {
      return {
          address: {
              province: '',
              city: '',
              town: ''
          }
      }
  },
  components: { VDistpicker },
  methods: {
      selected(data) {
        this.address.province = data.province.value;
        this.address.city = data.city.value;
        this.address.town = data.area.value;
      },
      confirm() {
          this.$emit('confirm', this.address);
      }
  }
}
</script>

<style>
.yan-dist-picker {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 5;
}

/* 选择地址的头部 */
#dist-picker .address-header[data-v-a078dc08] {
    border: 1px solid rgb(200, 200, 200);
}

#dist-picker .address-header ul li[data-v-a078dc08] {
    padding: 35px;
}

/* 选择地址的内容 */
#dist-picker .address-container ul[data-v-a078dc08] {
    height: 500px;
    overflow: auto;
}

#dist-picker .address-container ul li[data-v-a078dc08] {
    padding: 35px;
    font-size: 36px;
}

/* 确定 */
.yan-dist-picker-confirm {
    padding: 35px;
}

.yan-dist-picker-confirm div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px 0;    
    flex-grow: 1;
    background: rgb(180, 40, 45);
    color: #fff;
    border-radius: 8px;
}
</style>
