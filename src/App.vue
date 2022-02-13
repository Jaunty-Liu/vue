<template>
	<!-- <input type="text" @keyup="afn($event)"> -->
	<!-- 也就是相当于 -->
	<input type="text" @keyup.enter="afn1">
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
			console.log(e);
			if(e.keyCode == 13){
				console.log("按了回车键");
			}
		},
		afn1(){
			console.log("按了回车键");
		}
	},
};
</script>

<style>
</style>