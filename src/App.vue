<template>
<h2>人员登记系统</h2>

<div class="people_list">
    <ul>
        <li>姓名： <input type="text" id="username" /></li>
        <li>年龄： <input type="text" ref="age" /></li>
    </ul>
    <button @click="doSubmit()" class="submit">获取表单的内容</button>
</div>
</template>
<script>
export default {
    data() {
        return {
            message: "你好",
        };
    },
    methods: {
        doSubmit() {
            var username = document.querySelector("#username");
            alert(username.value);

            var ageDom = this.$refs.age;
            alert(ageDom.value);
        },
    },
};
</script>