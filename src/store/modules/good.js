const state = {
    // 商品详情
    good: {
        headImage: [],
        description: [],
        shortDescription: [],
        shortDescriptionImage: []
    },
    // 第一个评论的内容
    comment: {},
    // 第一个评论的作者
    author: {},
}

const getters = {
  good: state => state.good,
  comment: state => state.comment,
  author: state => state.author,
}

const mutations = {
    // 初始化菜单的全部内容
    initGood(state, payload) {
        state.good = payload.good;
    },
    // 初始化第一个评论的内容
    initComment(state, payload) {
        state.comment = payload.comment;
        state.author = payload.author;
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
