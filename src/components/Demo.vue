<template>
	<h1>一个人的信息</h1>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<slot name="qwe"></slot>
	<slot name="asd"></slot>
	<button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
	import {reactive} from 'vue'
	export default {
		name: 'Demo',
		props:['msg', 'school'],// 必写，有了这句setup才能收到props里面的内容
		// 数据不能少写但是可以多写，没有传入的数据就是undefined
		emits:['hello'],// 与Vue2的不同：子组件必须声明收到了hello事件
		setup(props,context){
			// console.log('---setup---',props)// 打印的就是上面的props对象
			// console.log('---setup---',context)
			// console.log('---setup---',context.attrs) //相当与Vue2中的$attrs
			// console.log('---setup---',context.emit) //触发自定义事件的。
			console.log('---setup---',context.slots) //插槽
			//数据
			let person = reactive({
				name:'张三',
				age:18
			})

			//方法
			function test(){
				context.emit('hello',666)
			}

			//返回一个对象（常用）
			return {
				person,
				test
			}
		}
	}
</script>

