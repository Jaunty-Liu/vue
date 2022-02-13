<template>
	<a href="http://www.baidu.com" target="_blank" @click="afn($event)">跳转</a>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
        };
    },
	methods: {
		afn(e){
			// 这样就阻止了跳转
			e.preventDefault();
		}
	},
};
</script>

<style>
</style>