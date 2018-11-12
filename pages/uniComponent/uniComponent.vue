<template>
	<view id="uni-component">
		<!-- button -->
		<view class="select">
			<view class="title">按钮</view>
			<button type="primary" size="mini" @tap="primaryHandler">主要按钮</button>
		</view>
		
		<!-- form 表单	 -->
		<view class="select">
			<view class="title">form 表单</view>
			<form class="form" @submit="formSubmit" @reset="formReset">
				<view class="form-list">
					<view class="tip">姓名</view>
					<input type="text" name='username' placeholder="请输入姓名" />
				</view>
				
				<view class="form-list">
					<view class="tip">地址</view>
					<input type="text" name='address' placeholder="请输入地址" />
				</view>
				
				<view class="form-list">
					<view class="tip">性别</view>
					<radio-group name='sex'>
						<label class="radio">
							<radio value="男" checked>男</radio>
							<radio value="女">女</radio>
						</label>
					</radio-group>
				</view>
				
				<view class="form-list submit-btn">
					<button form-type="submit" type="primary">注册</button>
					<button form-type="reset">重置</button>
				</view>
			</form>
		</view>
		
		<!-- video -->
		<view class="select">
			<view class="title">视频播放</view>
			<view class="page-section">
				<video id="myVideo" 
					src="http://www.runoob.com/try/demo_source/movie.mp4" 
					@error="videoErrorCallback" 
					controls>
				</video>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods:{
			primaryHandler() {
				uni.showModal({
					showCancel:false,
					content: '1',
				});
			},
			formSubmit: function (e) {
				// console.log(this.formData)
				// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				let {username,address,sex} = e.detail.value;
				uni.showToast({
					icon:'none',
					title:'姓名：' + username + '\t地址：' + address + '\t性别：' + sex
				})
			},
			formReset: function () {
				uni.showToast({
					title:'表单重置',
					icon:'none'
				})
			},
			videoErrorCallback() {
				uni.showToast({
					title:'视频加载错误',
					icon:'none'
				})
			}
		}
	}
</script>

<style lang="less">
	#uni-component {
		.select {
			padding:15px;
			border-bottom: 1px #ddd solid;
			.title {
				font-size: 16px;
				color:#DDD;
				margin-bottom: 20px;
			}
			.form {
				.form-list {
					display: flex;
					margin-bottom: 20px;
					.tip {
// 						border: 1px #0f0 solid;
// 						width:130px;
						flex: .2;
					}
					input {
						flex: 1;
					}
					._radio-group{
						flex: 1;
						 ._label ._radio {
							margin-right: 20px;
						}
					}
					&.submit-btn {
						margin-top:30px;
						margin-bottom:10px;
						button {
							height: 65upx;
							line-height: 65upx;
							width: 200upx;
						}
					}
				}
			}
		}
	}
</style>
