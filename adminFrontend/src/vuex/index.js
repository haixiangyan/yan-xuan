import Vue from 'vue'
import Vuex from 'vuex'
// 搜索内容
import admin from './modules/admin.js';

Vue.use(Vuex);

const state = {
    items: []
};

const store = new Vuex.Store({
    state,
    modules: {
        admin,
    }
});

export default store;