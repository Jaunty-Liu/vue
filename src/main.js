import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

//原来的代码
// createApp(App).mount('#app')

//修改后的代码

const app=createApp(App);
app.config.globalProperties.Axios=Axios;  //this.Axios
app.config.globalProperties.fetchJsonp=fetchJsonp; 

app.mount('#app');