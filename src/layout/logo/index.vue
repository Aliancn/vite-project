<template>
    <div class="logo" v-if="setting.logoHiden">
        <img :src="setting.logo">
        <p>{{ setting.title }}</p>
    </div>
</template>


<script setup lang="ts">
import setting from '@/setting';

</script>
<script lang="ts">
export default {
    name: "Logo"
}
</script>
<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: 20px;

    img {
        width: 40px;
        height: 40px;
    }

    p {
        font: $base-menu-logo-font;
        margin-left: 10px;
    }

}
</style>