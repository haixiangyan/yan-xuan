const state = {
    // 管理员信息
    admin: {
        adminID: -1
    },
    // 是否登录
    isLogin: false
}

const getters = {
    admin: state => {
        // 从session里拿 admin 信息
        state.admin = JSON.parse(sessionStorage.getItem('admin'))
        return state.admin;
    },
    isLogin: state => {
        // 从session里拿 admin 信息
        state.isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
        return state.isLogin;
    },
}

const actions = {

}

const mutations = {
    initadmin(state, payload) {
        // 初始化管理员
        state.admin = payload.admin;
        state.isLogin = payload.isLogin;
        //放进session里
        sessionStorage.setItem('admin', JSON.stringify(state.admin));
        sessionStorage.setItem('isAdminLogin', JSON.stringify(state.isLogin));
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}