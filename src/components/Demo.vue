<template>
	<!-- 因为一开始person中没有car属性，所以这样处理 -->
	<!-- 不建议给person写上“car:{}”，因为这样页面会显示{} -->
	<h3 v-show="person.car">座驾信息：{{person.car}}</h3>
	<button @click="showRawPerson">输出最原始的person</button>
	<button @click="addCar">给人添加一台车</button>
	<!-- 以下两行都可以实现响应式，因为新加的属性会自动设置为reactive -->
	<!-- 但是设置为markRow就不能修改了 -->
	<button @click="person.car.name+='!'">换车名</button>
	<button @click="changePrice">换价格</button>
</template>

<script>
	import {reactive,toRefs,markRaw} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})

			function addCar(){
				let car = {name:'奔驰',price:40}
				// person.car = car
				person.car = markRaw(car)
			}

			function changePrice(){
				person.car.price++
				console.log(person.car.price)
			}

			//返回一个对象（常用）
			return {
				person,
				...toRefs(person),
				showRawPerson,
				addCar,
				changePrice
			}
		}
	}
</script>