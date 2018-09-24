const state = {
    // 导航栏的索引
    navbarIndex: 0
}

const getters = {
  navbarIndex: state => state.navbarIndex,
}

const mutations = {
    // 改变所选的索引
    changeNavbarIndex(state, payload) {
        state.navbarIndex = payload.selectedIndex;
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
