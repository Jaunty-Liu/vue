<template>
	<input type="text" v-model="keyWord">
	<h3>{{keyWord}}</h3>
</template>

<script>
	import {ref,customRef} from 'vue'
	export default {
		name: 'App',
		setup() {
			//自定义一个ref——名为：myRef
			function myRef(value,delay){
				let timer
				return customRef((track,trigger)=>{
					// customRef函数规定必须返回一个对象，也就是得有get和set
					return {
						get(){
							console.log(`get有人从myRef这个容器中读取数据了，我把${value}给他了`)
							track() //通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
							return value
							// 这里就是经过处理后返回的数据
						},
						set(newValue){
							console.log(`set有人把myRef这个容器中数据改为了：${newValue}`)
							clearTimeout(timer)// 清除计时
							// 用延时函数防止请求过多，每次调用都清除一次计时
							timer = setTimeout(()=>{
								value = newValue
								trigger() //通知Vue去重新解析模板
							},delay)
						},
					}
				})
			}

			// let keyWord = ref('hello') //使用Vue提供的ref
			let keyWord = myRef('hello',500) //使用程序员自定义的ref
			
			return {keyWord}
		}
	}
</script>