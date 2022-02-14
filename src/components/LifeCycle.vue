<template>
    <div class="tab_info">
        <ul class="tab_header">
            <li v-for="(item,index) in posts" :key="index" :class="{'active':currentIndex===index}" @click="currentIndex=index">
                {{item.title}}
            </li>
        </ul>
        <div class="tab_content">
            <span v-html="content"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            msg: "我是一个数据",
            posts: [{
                    id: 1,
                    title: 'Nodejs 教程',
                    content: '<p>大地老师Nodejs系列教程有Nodejs基础、Nodejs Express、Nodejs Koa、Egg.js、Nest.js等</p>'
                },
                {
                    id: 2,
                    title: 'Golang教程',
                    content: '<p>教程包括：Golang零基础入门进阶教程（50讲）、Beego基础、Mysql入门实战、Gorm入门、Gorm实战、Gorm关联查询、Golang+Beego+Grom仿小米商城项目（真实企业级项目实战）</p>'
                },
                {
                    id: 3,
                    title: 'Ionic5.x教程',
                    content: '<p>Ionic4.x以后在 Angular、Vue、React基础上面做了一些封装，让我们可以用自己喜欢的框架，更快速和容易的开发移动的项目</p>'
                }
            ]
        }
    },
    computed: {
        content() {
            return this.posts[this.currentIndex].content;
        }
    }
}
</script>
<style>
    .h2 {
        text-align: center;
    }
    ul {
        list-style: none;
    }
    .tab_info {
        width: 600px;
        margin: 0 auto;
        border: 1px solid #eee;
    }
    .tab_info .tab_header {
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .tab_info .tab_header li {
            display: inline-block;
            margin: 0px 5px;
            background: #eee;
            text-align: center;
            padding: 0px 10px;
            cursor: pointer;
    }
    .tab_info .tab_header li.active {
        background: red;
        color: #fff;
    }
</style>