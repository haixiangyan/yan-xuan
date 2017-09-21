const state = {
    // 导航栏的索引
    menuIndex: 0,
    menuSource: [],
    selectedMenu: {}
}

const getters = {
  menuIndex: state => state.menuIndex,
  menuSource: state => state.menuSource,
  selectedMenu: state => state.selectedMenu
}

const mutations = {
    // 改变所选的索引
    changeMenuIndex(state, payload) {
        state.menuIndex = payload.selectedIndex;
    },
    // 改变所远的内容
    changeMenuContent(state, payload) {
        // 找到所选的菜单内容
        state.menuSource.forEach((elem) => {
            if (elem.name === payload.name) {
                state.selectedMenu = elem;
                return ;
            }
        });
    },
    // 获取菜单的全部内容
    initMenuSource(state, payload) {
        state.menuSource = payload.menuSource;
    },
    // 获取初始菜单所选内容
    initSelectedMenu(state, payload) {
        state.selectedMenu = payload.selectedMenu;
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
