// 小仓库：layout组件相关属性
import { defineStore } from "pinia";

const useLayoutStore = defineStore("LayoutStore", {
    state: () => {
        return {
            fold: false,
            refsh: false,
        }
    }
})

export default useLayoutStore;