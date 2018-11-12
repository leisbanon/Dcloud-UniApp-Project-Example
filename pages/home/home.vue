<template>
	<view id="home">
		<!-- 图片轮播 -->
		<swipers></swipers>
		
		<view class="home-tab">
			<view class="tab">
				<image src="../../static/image/door.png"></image>
				<view class="tab-text">手机门禁</view>
			</view>
			
			<view class="tab">
				<image src="../../static/image/door.png"></image>
				<view class="tab-text">访客授权</view>
			</view>
		</view>
		
		<view class="keys">
			<view class="header">
				<view>常用钥匙</view>
				<image src="../../static/icon/right_arrow.png"></image>
			</view>
			
			<view class="key-type">
				<view class="list" v-for="item in keyTypes" :key="item">
					<image :src="item.src"></image>
					<view class="text">{{item.text}}</view>
					<view class="sub-text">{{item.subText}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import swipers from '@/components/swipers/swipers';
	
	export default {
		components:{
			swipers
		},
	    data() {
			return {
				keyTypes:[
					{src:'../../static/image/door.png',text:'大门',subText:'李白小区'},
					{src:'../../static/image/garage.png',text:'车库门',subText:'李白小区'},
					{src:'../../static/image/building.png',text:'楼宇门',subText:'李白小区'},
				]
			}
		},
	}
</script>

<style lang="less" scoped>
	#home {
		height: 100%;
		background: linear-gradient(#191b22,#1b1d25);
		display: flex;
		flex-direction: column;
	}
	
	.home-tab {
		height: 210upx;
		display: flex;
		.tab {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			flex: 1;
			flex-wrap: wrap;
			._image {
				width: 75upx;
				height: 75upx;
			}
			.tab-text {
				color: #aaa8aa;
				font-size: 14px;
			}
			&:first-child {
				background: #1b1e27;
			}
			&:last-child {
				background: #111618;
			}
		}
	}
	
	.keys {
		background-color: #111618;
		margin-left: 35upx;
		margin-top: 25upx;
		border-radius: 3px;
		box-shadow: 0px 0px 3px 1px #101516;
		display: flex;
		flex-direction: column;
		.header {
			border-bottom: 1px #4b4d57 solid;
			color: #9a999d;
			font-size: 14px;
			height: 75upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-left: 22upx;
			padding-right: 50upx;
			._image {
				width: 18px;
				height: 18px
			}
		}
		.key-type {
			display: flex;
			justify-content: space-around;
			.list {
				border: 1px #111618 solid;
				padding-top: 45upx;
				padding-bottom: 45upx;
				display: flex;
				flex-direction: column;
				align-items:center;
				._image {
					width: 133upx;
					height: 133upx;
				}
				.text {
					font-size: 14px;
					color: #a6a5a8;
					margin-top: 35upx;
				}
				.sub-text {
					font-size: 12px;
					color: #6c6d75;
					margin-top: 15upx;
				}
			}
		}
	}
</style>