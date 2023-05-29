<template>
    <div class="dashboard-wrapper">
        <NavbarComponent />
        <div class="container">
            <div class="dashboard-content">
                <DashboardSidebarComponent />
                <main class="">
                    <NuxtPage />
                </main>
            </div>
            <FooterComponent :is-dashbaord="true" />
        </div>
    </div>
</template>

<script lang="ts">
import { useMainStore } from "~/store"
definePageMeta({
    middleware: [
        'dashboard'
    ]
})
export default defineComponent({
    async setup() {
        const mainStore = useMainStore()

        return { mainStore }
    },
    beforeCreate() {
        const id = useCookie("id")
        if (!id) {
            this.$router.push("/login")
        }
    }
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.dashboard-wrapper {
    background-color: #ffffffd0;
    border-radius: 15px;
    padding-bottom: 1px;
    .navbar {
        padding: 15px;
    }
}
.dashboard-content {
    display: flex;
}

main {
    width: 100%;
    padding: 30px;
    border-radius: 5px;
    border-radius: 8px;
    margin-right: 0;
    height: -moz-fit-content;
    height: fit-content;
    position: sticky;
    overflow: hidden;
    font-family: 'Nunito', sans-serif;
    background-color: #ffffffd0;
    height: auto;

    &.collapsed {
        padding: 0;
    }
}

@media screen and (max-width: 1700px) {
    main {
        padding: 0;
    }
}

@media screen and (max-width: 1420px) {
    .container {
        margin: 20px auto;
    }

    main {
        padding: 0;
    }
}

@media screen and (max-width: 992px) {
    .dashboard-content {
        flex-direction: column;
    }
}
</style>