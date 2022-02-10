<template>
	<div v-show="person.name">姓名：{{person.name}}</div>
	<div v-show="person.sex">性别：{{person.sex}}</div>
	<button @click="addSex">添加一个sex属性</button>
	<button @click="deleteName">删除一个name属性</button>
</template>

<script>
	import {reactive} from 'vue'
	export default {
		name: 'App',
		setup(){
			//数据
			let person = reactive({
				name:'张三'
			})

			//方法
			function addSex(){
				person.sex = '男'
			}
			function deleteName(){
				delete person.name
			}

			//返回一个对象（常用）
			return {
				person,
				addSex,
				deleteName
			}
		}
	}
</script>