<template>
    <el-icon style="margin-right:10px" @click="changeIcon">
        <component :is="layoutStore.fold ? 'Expand':'Fold'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <template v-for="item in $route.matched" :key="item.path">
            <el-breadcrumb-item :to="item.path">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>
                    {{ item.meta.title }}
                </span>
            </el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import useLayoutStore from '@/store/modules/layout';
let $route = useRoute();
let layoutStore = useLayoutStore();

const changeIcon = () => {
    layoutStore.fold = !layoutStore.fold;
    console.log(layoutStore.fold);
}
</script>
<script lang="ts">
export default {
    name: "breadcrumb"
}
</script>
<style scoped></style>