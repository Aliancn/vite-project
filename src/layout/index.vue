<template>
    <div class="layout_container">
        <!---左侧菜单-->
        <div class="layout_slider" :class="{ fold: layoutStore.fold }">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <el-menu background-color="#001529" text-color="#fff" :default-active="$route.path"
                    :collapse="layoutStore.fold">
                    <Menu :menuList="userStore.menuRouter"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 右侧导航 -->
        <div class="layout_tabbar" :class="{ fold: layoutStore.fold }">
            <Tabbar></Tabbar>
        </div>
        <!--右侧主体 -->
        <div class=" layout_main" :class="{ fold: layoutStore.fold }">
            <Main></Main>
        </div>
    </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import Tabbar from './tabbar/index.vue';
import useUserStore from '@/store/modules/user';
import { useRoute } from 'vue-router';
import useLayoutStore from '@/store/modules/layout';
let userStore = useUserStore();
let layoutStore = useLayoutStore();
let $route = useRoute();




</script>
<script lang="ts">
export default {
    name: "layout"
}
</script>
<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    // white-space: nowarp;
    .layout_slider {
        width: $base-menus-width ;
        height: 100vh;
        background-color: $base-menus-backgroundcolor;
        color: white;
        transition: all 0.3s;

        .scrollbar {
            height: calc(100vh - $base-menu-logo-height);
            width: 100%;

            .el-menu {
                border-right: 0px;
            }

        }

        &.fold {
            width : $base-menu-min-width;
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menus-width);
        height: $base-tabbar-height;
        top: 0px;
        left: $base-menus-width;
        transition: all 0.3s;
        // 边框
        border-width: 3px;
        border-style: solid;
        border-color: black;
        border-radius: 20px;

        &.fold {
            width: calc(100vw - $base-menu-min-width );
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menus-width);
        height: calc(100vh - $base-tabbar-height);
        background-color: aquamarine;
        left: $base-menus-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width );
            left: $base-menu-min-width;
        }
    }

}
</style>