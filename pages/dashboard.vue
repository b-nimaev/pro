<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-content">
            <NavbarComponent :is-dashboard="true" :fluidContainer="true" />
            <div class="row">
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
    background-color: #fff;
    border-radius: 0;
    padding: 15px;
    .navbar {
        padding: 15px;
    }
}

.dashboard-content {
    display: flex;
    padding: 15px;
    border-radius: 8px;
    background-color: #f6f6f6; // light
    flex-direction: column;

    .row {
        display: flex;
    }
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