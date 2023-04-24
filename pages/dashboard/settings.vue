<template>
    <main>
        <DashboardSettingsSectionPersonalData />
        <DashboardSettingsSectionExp />
        <DashboardSettingsSectionChooseColorScheme />
        <DashboardSettingsSectionChangePassword />
        <DashboardSettingsSectionDeleteAccount />
    </main>
</template>

<style lang="scss" scoped>
@import '~/assets/css/settings.scss';
</style>

<script lang="ts">
import { useMainStore } from "~/store";
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            colorTheme: ''
        }
    },
    methods: {
        choose_theme() {
            console.log('123')
        }
    }
})
</script>