<template>
	<view id="uni-interface">
		<text class="title">uni-app 提供了丰富的原生API，可以方便的调用客户端提供的能力，如获取用户的信息，本地存储，摄像头、支付功能等.</text>
		<text class="title">如下举例几种调用原生API 功能的应用，Dcloud 已经帮我们封装好这些方法，我们只需要调用它，使用起来也非常简单，详情参考Dcloud 官网：http://uniapp.dcloud.io/api/README</text>
		
		<text class="type">数据缓存：</text>
		<button type="primary" @click="on_setStorage()" size="mini">setStorage</button>
		<button type="primary" @click="on_getStorage()" size="mini">getStorage</button>
		<button type="primary" @click="on_removeStorage()" size="mini">removeStorage</button>
		
		<text class="type">从本地相册选择图片或者使用相机拍照：</text>
		<button type="primary" @click="on_chooseImage()">chooseImage</button>
		<image :src="photo" @click="on_previewImage"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				photo:null,
			};
		},
		methods:{
			// 本地存储数据
			on_setStorage() {
				uni.setStorage({
					key:'username',
					data:'GuanQun',
					success() {
						uni.showModal({
							title:'add storage data success',
							showCancel:false
						});
					}
				})
			},
			// 获取本地存储数据
			on_getStorage() {
				uni.getStorage({
					key:'username',
					success(data) {
						uni.showModal({
							title:JSON.stringify(data.data),
							showCancel:false
						})
					}
				})
			},
			// 删除本地存储数据
			on_removeStorage() {
				uni.removeStorage({
					key:'username',
					success() {
						uni.showModal({
							title:'remove storage success',
							showCancel:false
						})
					}
				})
			},
			// 从本地选择照片或者拍照
			on_chooseImage() {
				let then = this;
				uni.chooseImage({
					count:1,
					success(res) {
						then.photo = res.tempFilePaths;
					}
				})
			},
			// 图片预览
			on_previewImage() {
				let then = this;
				uni.previewImage({
					urls:then.photo
				})
			}
		}
	}
</script>

<style lang="less">
	#uni-interface {
		margin: 22px;
		.title {
			color: #CCCCCC;
			font-size: 16px;
			display: block;
			padding-bottom: 5px;
			margin-top: 10px;
			margin-bottom: 10px;
			border-bottom: 1px #CCC solid;
		}
		.type {
			display: block;
			margin-bottom: 10px;
		}
		button {
			margin-left: 5px;
			margin-bottom: 10px;
		}
	}
</style>
