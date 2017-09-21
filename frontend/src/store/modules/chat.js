const state = {
    // 聊天记录
    chatContent: [{
        content: '你好，有什么可以帮到你？',
        isMe: false,
        time: new Date().getTime()
    }]
}

const getters = {
  chatContent: state => state.chatContent,
}

const mutations = {
    // 获取搜索内容
    setChatContent(state, payload) {
        state.chatContent.push(payload.chatContent);

        let response = '';

        // 判断聊天的内容
        if (payload.chatContent.content.indexOf('你好') !== -1) {
            response = '你好';
        }
        else if (payload.chatContent.content.indexOf('发票') !== -1) {
            response = '开发票需要你在下单的时候勾选我要开发票';
        }
        else {
            response = '您好，很抱歉您的问题小选机器人还解答不了呢，您可以联系人工客服';
        }
        state.chatContent.push({
            content: response,
            isMe: false,
            time: new Date().getTime()
        });
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
