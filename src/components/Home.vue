<template>
    <div class="home">
        <button @click="isShow=!isShow">挂载/卸载组件</button>
        <br>
        <keep-alive>
            <life-cycle v-if="isShow"></life-cycle>
        </keep-alive>
    </div>
</template>

<script>
import LifeCycle from './LifeCycle';
export default {
    data() {
        return {
            isShow: true
        }
    },
    methods: {

    },
    components: {
        LifeCycle
    }

}
</script>