const state = {
    // 为某个订单添加评论
    commentOrderInfo: {},
    commentOrderID: 0,
}

const getters = {
  commentOrderInfo: state => state.commentOrderInfo,
  commentOrderID: state => state.commentOrderID
}

const mutations = {
    // 获取订单内容
    setCommentOrderInfo(state, payload) {
        state.commentOrderInfo = payload.commentOrderInfo;
        state.commentOrderID = payload.orderID;
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
