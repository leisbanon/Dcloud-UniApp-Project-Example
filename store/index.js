import Vue from 'vue'
import Vuex from 'vuex'

import Mutation from './mutation.js'
import Action from './action.js'

Vue.use(Vuex);

// 定义状态（全局变量）
let state = {
	userId:'',
	userName:'',
}

//实例化Vuex Store 对象。
const store = new Vuex.Store({
	state:state,
	mutations:Mutation,
	actions:Action,
});

export default store;