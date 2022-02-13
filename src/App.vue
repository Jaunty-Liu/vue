<template>
  <span>111</span>
  <span>{{h2}}</span>
  <span v-html="h2"></span>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      h2: "<h2>h2<h2>"
    }
  }
}
</script>