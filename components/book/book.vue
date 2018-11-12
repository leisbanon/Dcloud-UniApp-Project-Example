<template>
	<view id="book">
		<view class="book-list">
			<view class="header">
				<text>书籍名称</text>
				<text>书籍价格</text>
				<text>操作</text>
			</view>
			
			<view class="list" v-for="item in bookList" :key="item.bookId">
				<text>{{item.bookName}}</text>
				<text>{{item.bookPrice}}</text>
				<text class="delete" @click="onDelete(item)">删除</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['bookList'],
		data() {
			return {
				
			};
		},
		methods:{
			// 父组件向子组件发送数据
			onDelete(item) {
				this.$emit("onDelete",item);
			}
		}
	}
</script>

<style lang="less">
	#book {
		.book-list {
			margin:22px;
			.header {
				display: flex;
				color: white;
				text {
					background-color:#D3D3D3;
					text-align: center;
					flex: 1;
					padding-top:3px;
					padding-bottom: 3px;
				}
			}
			.list {
				display: flex;
				text {
					border: 1px #D3D3D3 solid;
					border-left: none;
					border-top: none;
					text-align: center;
					flex: 1;
					padding-top:3px;
					padding-bottom: 3px;
					&:first-child {
						border-left: 1px #D3D3D3 solid;
					}
				}
				.delete {
					color: 	#00BFFF;
					text-decoration: underline;
				}
			}
		}
	}
</style>
