import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function (){
	//实现鼠标“打点”相关的数据
	let point = reactive({
		x:0,
		y:0
	})

	//实现鼠标“打点”相关的方法
	// 为了便于添加和移除就单拎出这个方法
	function savePoint(event){
		point.x = event.pageX
		point.y = event.pageY
		console.log(event.pageX,event.pageY)
	}

	//实现鼠标“打点”相关的生命周期钩子
	onMounted(()=>{
		window.addEventListener('click',savePoint)
	})
	// 记得添加组件卸载前销毁点击事件监听，这样在Demo子组件销毁之后就不会再监听点击事件了
	onBeforeUnmount(()=>{
		window.removeEventListener('click',savePoint)
	})

	return point
}
