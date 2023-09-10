import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
// 引入Element提供的全部的图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allGlobalComponent: any = { SvgIcon, Pagination };
export default {
    //必须是install方法
    install(app: any) {
        Object.keys(allGlobalComponent).forEach(key => {
            //注册
            app.component(key, allGlobalComponent[key]);
        })
        //将element-plus提供图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    },
}