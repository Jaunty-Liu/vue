<template>
<News />
<hr>
<Baidu />
</template>

<script>
//1、引入组件
import News from './components/News';
import Baidu from './components/Baidu';
export default {
    data() {
        return {
            msg: "app根组件",
        };
    },
    //2、挂载组件
    components: {
        News,
        Baidu
    }
};
</script>