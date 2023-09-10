// 创建用户相关的小仓库
import { defineStore } from 'pinia';
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user';
import type { loginFormData, userInfoReponseData } from '@/api/user/type';
import type { userState } from './type/type';
import { constRoute } from '@/router/routers';

let useUserStore = defineStore('User', {
    //  存储数据的地方
    state: (): userState => {
        return {
            token: localStorage.getItem("TOKEN"),
            menuRouter: constRoute,
            username: '',
            avatar: '',
        }
    },
    // 异步 逻辑的地方
    actions: {
        async userLogin(data: loginFormData) {
            // 登录请求
            let result = await reqLogin(data);
            // 登录成功 200 - token
            if (result.code == 200) {
                //仓库存储用户的token
                this.token = result.data.token;
                this.token = result.data.token;
                // 本地存储
                localStorage.setItem("TOKEN", result.data.token);
                // 使函数返回成功的promise
                return 'ok';
            } else {
                // 登录失败 201 - msg
                return Promise.reject(new Error(result.message))
            }
        },
        //获取用户信息方法
        async userInfo() {
            //获取用户信息进行存储仓库当中[用户头像、名字]
            const result: userInfoReponseData = await reqUserInfo()
            //如果获取用户信息成功，存储一下用户信息
            if (result.code == 200) {
                this.username = result.data.username;
                this.avatar = result.data.avatar;
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //退出登录
        async userLogout() {
            //退出登录请求
            const result: any = await reqLogout()
            if (result.code == 200) {
                //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
                this.token = ''
                this.username = ''
                this.avatar = ''
                localStorage.removeItem('TOKEN');
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
    },
    getters: {

    }
})

export default useUserStore;