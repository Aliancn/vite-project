<template>
    <div id="hello">
        <el-button type="primary" size="default" style="color: lightgreen;" @click="but">
            {{ num }}
        </el-button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const num = ref(10);

const but = ()=>{
    num.value+=1;
}



</script>
<style scoped>
#hello{
    width: 200px;
    height: 200px;
    background-color: lightblue;
}
</style>