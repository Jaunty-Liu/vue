<template>
    <!-- 这里接收Home组件传过来的aaa数据并且“update”实现双向绑定 -->
    <input type="text" :value="aaa" @input="$emit('update:aaa',$event.target.value)" placeholder="请输入内容" />
</template>

<script>
export default {
    props: ["aaa"]
}
</script>