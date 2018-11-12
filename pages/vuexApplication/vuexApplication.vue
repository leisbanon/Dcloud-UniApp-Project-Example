<template>
	<view id="vuex-application">
		<view class="title">uni-app 内置了Vuex，做为uniApp技术栈的应用。其语法也完全遵循Vuex 使用。当应用需要使用到全局变量的时候，推荐加入Vuex的使用.</view>
		
		<view class="">当前应用状态：</view>
		<view v-text="store.state" style="word-break: break-all;"></view>
		
		<button type="primary" @click="updateState()">this.$store.commit</button>
		
		<button type="primary" @click="diapatchState()">this.$store.dispatch</button>
		
		<button type="primary" @click="getStoreState()">查看当前应用状态</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				store:{
					state:'',
				}
			};
		},
		onLoad() {
			this.getStoreState();
		},
		methods:{
			updateState() {
				let userData = {
					userId:'431103',
					userName:'XiaoLei',
				};
				this.$store.commit('setUser',userData);
			},
			diapatchState() {
				let userData = {
					userId:'431103',
					userName:'XiaoMing',
				};
				this.$store.dispatch('syncSetUser',userData);
			},
			getStoreState() {
				let state = this.$store.state;
				this.store.state = JSON.stringify(state);
			},
		}
	}
</script>

<style lang="less">
	#vuex-application {
		margin: 22px;
		.title {
			color: #CCCCCC;
			font-size: 16px;
		}
		button {
			margin-bottom: 12px;
			margin-top: 12px;
		}
	}
</style>
