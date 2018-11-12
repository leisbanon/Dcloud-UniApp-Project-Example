<template>
	<view>
		<swipers></swipers>
		<text class="title">得图片轮播，我们可以复用它。将它独立封装成一个组件，写在 components 文件中</text>
		
		<!-- 传参到父组件 -->
		<book :bookList="bookList" @onDelete="onDelete"></book>
		<text class="title">书籍列表我们实现父子组件之间的通讯，代码演示子组件向父组件传递数据，父组件向子组件发送数据。实际组件的任何应用和Vue.js 规范相同！</text>
	</view>
</template>

<script>
	import swipers from '@/components/swipers/swipers';
	import book from '@/components/book/book/';
	
	export default {
		components:{
			swipers,
			book
		},
		data() {
			return {
				// 书籍列表
				bookList:[],
			};
		},
		onLoad() {
			let list = [
				{bookId:'0',bookName:'西游记',bookPrice:'100.00'},
				{bookId:'1',bookName:'三国演义',bookPrice:'120.00'},
				{bookId:'2',bookName:'水浒传',bookPrice:'90.00'},
				{bookId:'4',bookName:'红楼梦',bookPrice:'150.00'},
			]
			
			this.bookList = list;
		},
		methods:{
			onDelete(item) {
				this.bookList.forEach((v,i) => {
					if(v.bookId == item.bookId) {
						this.bookList.splice(i,1);
					}
				})
			}
		}
	}
</script>
<style lang="less">
	.title {
		color: #CCC;
		font-size: 16px;
		display: block;
		margin: 22px;
		text-indent: 2em;
	}
</style>