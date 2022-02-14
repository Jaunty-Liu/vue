<template>
<div class="home">
    我是一个Home组件
    <br>
    <br>
    <!-- 这个aaa就是ItyingInput组件需要接收的数据的名称，然后这个数据绑定了Home的keyboard -->
    <v-input v-model:aaa="keyword"></v-input>
    <br>
    {{keyword}}
    <hr>
    <user-name v-model:firstName="firstName" v-model:lastName="lastName"></user-name>
    <br>
    <br>
    {{firstName}}- {{lastName}}
</div>
</template>

<script>
import ItyingInput from './ItyingInput';
import UserName from './UserName';
export default {
    data() {
        return {
            keyword: "女装",
            firstName: "",
            lastName: "",
        }
    },
    methods: {
    },
    components: {
        "v-input": ItyingInput,
        UserName
    }

}
</script>