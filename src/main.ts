import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件的配置文件
import 'virtual:svg-icons-register'
//引入自定义插件
import globalComponent from '@/components'
import router from "./router";
import pinia from "@/store/index";

// 获取应用实例
const app = createApp(App);
// 安装elementPlus插件
app.use(ElementPlus,{
    locale:zhCn
});
//安装自定义插件
app.use(globalComponent);
//引入全局样式
import '@/styles/index.scss'

app.use(router);
//引入路由鉴权文件
import './router/permission.ts'
app.use(pinia);

// 将应用挂载到挂载点上
app.mount('#app');