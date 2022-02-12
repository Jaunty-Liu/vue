<template>
	<div class="app">
		<h3>我是App组件</h3>
		<Suspense>
			<template v-slot:default>
				<!-- 这就是真正要展示的默认的组件 -->
				<Child/>
			</template>
			<template v-slot:fallback>
				<!-- 如果默认组件未加载加载这个 -->
				<h3>稍等，加载中...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
	// import Child from './components/Child'//静态引入
	// 如果静态引入的话setup就不能返回promise因为这样组件会消失
	import {defineAsyncComponent} from 'vue' 
	const Child = defineAsyncComponent(()=>import('./components/Child')) //异步引入
	export default {
		name:'App',
		components:{Child},
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: .625rem;
	}
</style>