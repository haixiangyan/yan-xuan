const state = {
    // 搜索内容索引
    searchResult: {
        data: []
    }
}

const getters = {
  searchResult: state => state.searchResult,
}

const mutations = {
    // 获取搜索内容
    getSearchResult(state, payload) {
        state.searchResult.data = payload.searchResult;
    },
}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
