<template>
	<div class="static" :class="[activeClass, errorClass]"></div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return{
			activeClass: 'active',
			errorClass: 'error'
		}
	}
}
</script>

<style>
	.static {
		font-size: 20px;
	}

	.active {
		width: 100px;
		height: 100px;
		background: red;
	}

	.error {
		color: blue;
	}
</style>