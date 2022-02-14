<template>
<div>
    <h3>Location组件</h3>
    {{title}}
    <br>
    username:{{userinfo.username}}
    <br>
    age:{{userinfo.age}}
    <p>provider inject实现父子组件传值的时候，子组件改变数据也会影响父组件</p>
    <input type="text" v-model="userinfo.username">
</div>
</template>

<script>
import {inject} from "vue"
export default {
    setup() {
        let title = inject('title');
        let userinfo = inject("userinfo")
        return {
            title,
            userinfo
        }
    }
}
</script>