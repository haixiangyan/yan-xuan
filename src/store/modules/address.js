const state = {
  // 搜索内容索引
  editAddress: {
    receiver: '',
    province: '',
    city: '',
    town: '',
    detail: '',
    telephone: '',
    isDefault: false
  },
  editAddressIndex: 0,
  isEditAddress: false
}

const getters = {
  editAddress: state => state.editAddress,
  // 是否正要编辑地址
  isEditAddress: state => state.isEditAddress,
  editAddressIndex: state => state.editAddressIndex,
}

const mutations = {

  // 获取正在编辑的地址
  getEditAddress(state, payload) {
    state.editAddress = payload.editAddress;
    state.editAddressIndex = payload.editAddressIndex;
  },

  // 重置编辑的状态
  resetEditState(state) {
    state.isEditAddress = false;
    state.editAddress = {
      receiver: '',
      province: '',
      city: '',
      town: '',
      detail: '',
      telephone: '',
      isDefault: false
    };
    state.editAddressIndex = 0;
  },

  // 开启编辑的状态
  trickEditState(state) {
    state.isEditAddress = true;
  },

  // 删除地址
  removeAddress(state, payload) {
  }
}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
