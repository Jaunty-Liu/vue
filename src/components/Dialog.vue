<template>
	<div>
		<button @click="isShow = true">点我弹个窗</button>
		<teleport to="body">
			<!-- 就是移动到最后形成的界面的body标签里面，然后里面的布局就参照body子标签布局了 -->
			<div v-if="isShow" class="mask">
				<div class="dialog">
					<h3>我是一个弹窗</h3>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<button @click="isShow = false">关闭弹窗</button>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script>
	import {ref} from 'vue'
	export default {
		name:'Dialog',
		setup(){
			let isShow = ref(false)
			return {isShow}
		}
	}
</script>

<style>
	/* 设置遮罩层 */
	.mask{
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.dialog{
		position: absolute;
		top: 50%;/* 以页面为标准的50% */
		left: 50%;/* 以页面为标准的50% */
		transform: translate(-50%,-50%);/* 以自己为标准的50% */
		/* 以上是居中的写法 */
		text-align: center;
		width: 300px;
		height: 300px;
		background-color: green;
	}
</style>