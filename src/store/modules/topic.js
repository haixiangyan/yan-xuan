import * as types from '../mutations_types.js'

const state = {
    topic: []
}

const getters = {
    topic: state => state.topic,
}

const actions = {

}

const mutations = {
    initTopic(state, payload) {
        state.topic = payload.topic;
    },
}

/*
//.vue中使用
{{user.name}}
computed: {
    user() {
        return this.$store.getters.user;
    }
}

this.$store.commit('initUser'. {
    user:{
        name: 'jj'
    }
})
*/

export default {
    state,
    getters,
    actions,
    mutations
}