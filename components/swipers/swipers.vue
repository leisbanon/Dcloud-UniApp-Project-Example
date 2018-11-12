<template>
	<view class="swiper-container">
		<swiper 
			:indicator-dots="true" 
			:autoplay="true" 
			interval="3000" 
			duration="500"
			indicator-color="#a6a5a8"
			indicator-active-color="#ff7f39">
			<swiper-item>
				<image src="../../static/image/bg_1.png"></image>
			</swiper-item>
			
			<swiper-item>
				<image src="../../static/image/bg_2.png"></image>
			</swiper-item>
		</swiper>
		
		<view class="swiper-tip">
			<view class="tip-text">Smart Key</view>
			<view class="tip-sbutext">A digital features that can facilitate more</view>
			<view class="tip-sbutext">functionality than just unlocking a</view>
			<view class="tip-sbutext">physical or digital lock system.</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less">
	.swiper-container {
		position: relative;
		flex-direction: column;
		._swiper {
			height: 360upx;
			._swiper-item {
				._image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.swiper-tip {
			z-index:100;
			color:white;
			position:absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			padding-left: 75upx;;

			display: flex;
			flex-direction: column;
			justify-content: center;
			.tip-text {
				color: white;
				font-size: 20px;
				margin-bottom: 10px;
			}
			.tip-sbutext {
				color: #a6a5a8;
				line-height: 1.5;
				font-weight: 600;
				font-family: PingFangTC;
				font-size: 12px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: pre;
			}
		}
	}
</style>
