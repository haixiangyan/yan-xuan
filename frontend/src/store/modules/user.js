import * as types from '../mutations_types.js'

const state = {
    user: {
        _id: '',
        telephone: '',
        password: '',
        photo: '',
        name: '',
        gender: '',
        __v: '',
        address: [],
        interest: [],
        userID: -1
    },
    historyUser: {
        _id: '',
        telephone: '',
        password: '',
        photo: '',
        name: '',
        gender: '',
        __v: '',
        address: [],
        interest: []
    },
    file: null,
    historyFile: null,
    loginState: {
        telephone: '',
        isLogin: false
    }
}

const getters = {
    user: state => {
        // 从session里拿
        state.user = JSON.parse(sessionStorage.getItem('user'))
        return state.user;
    },
    file: state => {
        return state.file;
    },
    historyFile: state => state.historyFile,
    historyUser: state => state.historyUser,
    loginState: state => {
        if (sessionStorage.getItem('loginState')) {
            state.loginState = JSON.parse(sessionStorage.getItem('loginState'))
        }
        return state.loginState;
    }
}

const actions = {

}

const mutations = {
    initUser(state, payload) {
        state.user = payload.user;
        state.user.userID = payload.user.telephone;
        //放进session里
        sessionStorage.setItem('user', JSON.stringify(state.user));
    },
    initHistoryUser(state, payload) {
        state.historyUser = JSON.parse(JSON.stringify(payload.historyUser));
    },
    editFile(state, payload) {
        state.file = payload.file;
    },
    editHistoryFile(state, payload) {
        state.historyFile = payload.historyFile;
    },
    cleanHistoryUser(state, payload) {
        state.historyUser.telephone = '';
    },
    setLoginState(state, payload) {
        state.loginState.telephone = payload.loginState.telephone;
        state.loginState.isLogin = payload.loginState.isLogin;
        sessionStorage.setItem('loginState', JSON.stringify(state.loginState));
    }
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