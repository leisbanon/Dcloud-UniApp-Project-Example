<script>
	export default {
		// 当uni-app 初始化完成时触发，全局只调用一次
		onLaunch: function () {
			console.log('App Launch')
		},
		// 当uni-app 启动,从后台到前台显示
		onShow: function () {
			console.log('App Show')
		},
		// 当uni-app 隐藏,从前台进入后台
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	page {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	/*导入页面的公用样式 */
	@import "./common/uni.css";
	

</style>
