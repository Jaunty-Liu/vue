<template>
<div class="home">
    <input type="text" v-model="keyword" @keyup="getData">
    <hr>
    <ul>
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            keyword: "",
            list: [],
            timer: ""
        }
    },
    methods: {
        getData() {
            //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=golang&cb=xxxxx
            if (this.keyword != "") {
                clearTimeout(this.timer); //清除定时器
                this.timer = setTimeout(() => {
                    var api = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.keyword
                    this.fetchJsonp(api, {
                            jsonpCallback: 'cb',
                        })
                        .then((response) => {
                            return response.json()
                        }).then((data) => {
                            console.log(data.s)
                            this.list = data.s; //用到this一定要注意this指向
                        }).catch((error) => {
                            console.log(error)
                        })
                }, 200)

            } else {
                this.list = [];
            }
        }
    },

}
</script>