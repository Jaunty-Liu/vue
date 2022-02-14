<template>
<div class="date-picker">
    <!-- “$attrs”接收父组件传入的属性 -->
    <input type="date" v-bind="$attrs" />
</div>
</template>

<script>
export default {
    inheritAttrs: false, //禁用默认继承
    data() {
        return {

        }
    }
}
</script>
