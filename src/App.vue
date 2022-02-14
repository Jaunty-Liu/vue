<template>
<h1>我是app根组件--{{title}}</h1>
<input type="text" v-model="username" />
{{username}}
<br><br>
<Home />
</template>

<script>
import Home from './components/Home';
import {reactive, ref, provide, toRefs} from "vue"
export default {
    name: 'App',
    setup() {
        let userinfo = reactive({
            username: "张三",
            age: 20
        })
        let title = ref("app根组件里面的title");

        provide("title", title);
        provide("userinfo", userinfo);
        return {
            title,
            ...toRefs(userinfo)
        }
    },
    components: {
        Home
    },

}
</script>
