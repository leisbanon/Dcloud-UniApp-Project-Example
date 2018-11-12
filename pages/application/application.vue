<template>
	<view id="application">
		<view class="app-list">
			<view class="list" @click="toPage('0')">uniApp组件应用</view>
			<view class="list" @click="toPage('1')">Vue组件应用</view>
			<view class="list" @click="toPage('2')">网络请求</view>
			<view class="list" @click="toPage('3')">uniApp 接口(调用原生API)</view>
			<view class="list" @click="toPage('4')">在uniApp 中使用Vuex</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			toPage(index) {
				let url = '';
				switch (index){
					case '0':
						url = '../uniComponent/uniComponent';
						break;
					case '1':
						url = '../vueComponent/vueComponent';
						break;
					case '2':
						url = '../network/network';
						break;
					case '3':
						url = '../uniInterface/uniInterface';
						break;
					case '4':
						url = '../vuexApplication/vuexApplication';
						break;
					default:
						break;
				}
				
				uni.navigateTo({
					url:url
				});
			}
		}
	}
</script>

<style lang="less">
	#application {
		.app-list {
			display: flex;
			flex-wrap: wrap;
			padding-top: 12px;
			padding-bottom: 12px;
			.list {
				// border: 1px #0f0 solid;
				height: 200upx;
				width: 200upx;
				border-radius: 50%;
				font-size: 16px;
				display: flex;
				justify-content: center;
				align-items: center;
				background:#6495ED;
				color: white;
				padding:3px;
				margin:5px;
				text-align:center;
				&:active {
					opacity: 0.8;
				}
			}
		}
	}
</style>
