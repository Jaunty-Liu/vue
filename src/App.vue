<template>
  <div>
    <Demo msg="你好啊" school="尚硅谷">
      <template slot="test1">
        <span>尚硅谷</span>
      </template>
      <template slot="test2">
        <span>尚硅谷！！！</span>
      </template>
    </Demo>
  </div>
</template>

<script>
  import Demo from './components/Demo.vue'
  export default{
    name: 'App',
    components:{
      Demo
    }
  }
</script>