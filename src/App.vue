<template>
  <div>
    <div>爱好：{{person.hobby}}</div>
    <button @click="updateHobby">改变第一个hobby值</button>
  </div>
</template>

<script>
  // import Vue from 'vue'
  export default{
    name: 'App',
    data(){
      return{
        person:{
          name: '张三',
          age: 18,
          hobby:['学习', '吃饭']
        }
      }
    },
    methods: {
      updateHobby(){
        // this.person.hobby[0] = '逛街'// 非响应式
        // 第一种：
        this.$set(this.person.hobby, 0, '逛街')
        // 第二种：
        this.person.hobby.splice(0, 1, '逛街')
      }
    },
  }
</script>