import type { RouteRecordRaw } from "vue-router"

export interface userState {
    token: string | null,
    menuRouter: RouteRecordRaw[],
    username: string,
    avatar: string,
}