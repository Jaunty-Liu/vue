<template>
  <div>
    <h3>我是Demo组件</h3>
    {{msg}}
    {{school}}
    <slot></slot>
    <div>111</div>
    <slot name="test2"></slot>
    <slot name="test1"></slot>
  </div>
</template>
<script>
  export default{
    name:'Demo',
    props:[
      'msg',
      'school'
    ],
    mounted() {
      console.log(this)
    },
  }
</script>