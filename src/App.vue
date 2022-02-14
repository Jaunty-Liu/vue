<template>
    <Home @change="showChange"/>
</template>

<script>
//1、引入组件
import Home from './components/Home';
export default {
    data() {
        return {
        };
    },
    methods: {
        showChange(event) {
            console.log(event.target.value) // 获取子组件选择的值也就是value，1或2或3
        }
    },
    //2、挂载组件
    components: {
        Home
    }
};
</script>