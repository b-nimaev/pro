<template>
    <div class="menu" :class="{ 'active': menuStatus }">
        <button @click="closeMenu()" class="close">Закрыть</button>
        <div class="container">
            <div class="row">
                <NuxtLink to="/">
                    <LogotypeComponent themeClass="very-light" />
                </NuxtLink>
            </div>
            <div class="toggler-closer show">
            </div>
            <ul v-if="menuStatus">
                <li>
                    <NuxtLink to="/">Главная</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/tests">Тесты</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/proforientation">Профориентация</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/career">Карьера</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/for-consultants">Консультантам</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/for-consultants">Консультантам</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { useMainStore } from 'store';
export default defineComponent({
    setup () {},
    data () {
        return {
            menuStatus: false
        }
    },
    methods: {
        closeMenu: function () {
            this.$data.menuStatus = false
        }
    }
})
</script>