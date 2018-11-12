<template>
	<view id="network">
		<button type="primary" @click="onNetwork()" :loading="loading">Network Request</button>
		<textarea class="text" :value="data" placeholder='请求数据' maxlength='-1' :auto-height="true"></textarea>
	</view>
</template>

<script>
	import {onGithub} from '@/api/api'
	export default {
		data() {
			return {
				loading:false,
				data:null,
			};
		},
		methods:{
			onNetwork() {
				let then = this;
				then.loading = true;
				
				onGithub().then(v => {
					then.data = JSON.stringify(v);
					then.loading = false;
				}).catch(e => {
					uni.showModal({
						title:'错误！',
						showCancel:false
					});
					
					then.loading = false;
				})
			}
		}
	}
</script>

<style lang="less">
	#network {
		margin: 22px;
		._textarea {
			margin-top:12px;
		}
	}
</style>
