<template>
	<ul>
    	<li v-for="(item,index) in list" :key="index" :class="{'red':index==0,'blue':index==1}">{{item}}</li>
    	<li v-for="(item,index) in list" :key="index" :style="{'color': color, 'blue': index == 1}">{{item}}</li>
    	<li v-for="(item,index) in list" :key="index" :style="[index == 0? styleRed: null, index == 1? styleBlue: null]">{{item}}</li>
	</ul>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
          list: ['马总', '刘总', '李总'],
		  styleRed: {
			  color: 'red'
		  },
		  styleBlue: {
			  color: 'blue'
		  }
        };
    },
};
</script>

<style>
	.red {
		color: red;
	}

	.blue {
		color: blue;
	}
</style>