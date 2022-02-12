<template>
	<h4>当前的x.y值是：{{x.y}}</h4>
	<!-- 这个功能无用，因为value是NaN -->
	<button @click="x++">点我x++</button>
	<!-- 要用的话只能直接替换 -->
	<button @click="x={y:888}">点我替换x</button>
	<button @click="x.y++">点我x.y++</button>
	<hr>
	<h4>{{person}}</h4>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
	import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//只考虑第一层数据的响应式，也就是按“涨薪”按钮之后不会响应，但是数据实际上被改变了，修改第一层数据其他几层数据就会响应
			let person = shallowReactive({
			// let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})
			let x = shallowRef({
				y:0
			})
			console.log('******',x)// value是NaN

			//返回一个对象（常用）
			return {
				x,
				person,
				...toRefs(person)
			}
		}
	}
</script>