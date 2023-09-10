<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" xs="0"> </el-col>
            <el-col :span="12" xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到...</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="login_btn" @click="login" :loading="load"></el-button>
                    </el-form-item>
                </el-form>

            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { ref, reactive } from 'vue';
import useUserStore from "@/store/modules/user"
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import { getTimePeriod } from '@/utils/getTime';
import { useRoute } from 'vue-router';
const loginForm = reactive({ username: '', password: '' });
let userStore = useUserStore();
let $router = useRouter();
let $route = useRoute();
let load = ref(false);

const validateUserName = (rule: any, value: any, callback: any) => {
    if (value.length >= 5) {
        callback();
    } else {
        callback(new Error("账号长度至少为5位"));
    }
}
const validatePassWord = (rule: any, value: any, callback: any) => {
    if (value.length >= 6) {
        callback();
    } else {
        callback(new Error("密码长度至少为6位"));
    }
}

const rules = {
    username: [
        { trigger: 'blur', validator: validateUserName }
    ],
    password: [
        { trigger: 'blur', validator: validatePassWord }
    ]
}
// 获取表单实例
const loginForms = ref();
const login = async () => {
    try {
        // 先进行表单效验
        await loginForms.value.validate();
    } catch (error) {
        ElNotification({
            type: 'error',
            message: '输入的格式错误',
        })
        return;
    }


    // 通知仓库发送登录请求~   
    // 请求成功 -> 首页展示数据
    // 请求失败 -> 弹出登录失败信
    load.value = true;
    try {
        await userStore.userLogin(loginForm);
        let redirect: string = $route.query.redirect;
        $router.push({ path: redirect || '/' })
        ElNotification({
            type: 'success',
            message: `${getTimePeriod()}好`,
            title: 'Hi~',
        })
        load.value = false;
    } catch (error) {
        ElNotification({
            type: 'error',
            message: (error as Error).message,
        })
        load.value = false;
    }
}
</script>
<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url("@/assets/images/login_form.png") no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            font-size: 20px;
            color: white;
            margin: 20px 0px;
        }

        .login_btn {
            width: 100%;
        }
    }
}
</style>