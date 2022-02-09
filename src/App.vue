<template>
  <div>
    <div v-show="person.name">姓名：{{person.name}}</div>
    <div>年龄：{{person.age}}</div>
    <div v-show="person.sex">性别：{{person.sex}}</div>
    <button @click="addSex">添加一个sex属性</button>
    <button @click="deleteName">删除name属性</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default{
    name: 'App',
    data(){
      return{
        person:{
          name: '张三',
          age: 18
        }
      }
    },
    methods: {
      addSex(){
        console.log(this.person.sex)
        this.person.sex = '女'
        console.log(this.person.sex)
        // this.$set(this.person, 'sex', '女')
        Vue.set(this.person, 'sex', '女')
      },
      deleteName(){
        // console.log(this.person.name)
        // delete this.person.name
        // console.log(this.person.name)
        // this.$delete(this.person, 'name')
        Vue.delete(this.person, 'name')
      }
    },
  }
</script>